import React from 'react';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { shell } from '@electron/remote';
import AvatarEditor from 'react-avatar-editor';
import { MdEdit, MdCameraAlt } from 'react-icons/md';
import { RiZoomOutLine, RiZoomInLine } from 'react-icons/ri';
import { Dialog, Slider } from '@mui/material';
import { withStyles } from '@mui/styles';

import { Button } from '~/components/Button';
import { sleep, lang } from '~/utils';
import MimeType from '~/utils/mimeType';
import Base64 from '~/utils/base64';

import Menu from './Menu';
import ImageLibModal from './ImageLibModal';
import PresetImagesModal from './PresetImagesModal';

interface IProps {
  className?: string
  width: number
  placeholderWidth: number
  editorPlaceholderWidth: number
  imageUrl: string
  showAvatarSelect?: boolean
  avatarMaker?: boolean
  roundedFull?: boolean
  useOriginImage?: boolean
  name?: string
  ratio?: number
  openerRef?: React.RefObject<HTMLDivElement>
  getImageUrl: (url: string) => void
}

export const ImageEditor = observer((props: IProps) => {
  const state = useLocalObservable(() => ({
    showMenu: false,
    showImageLib: false,
    showPresetImages: false,
    proxyImageUrl: '',
    mimeType: '',
    isUploadingOriginImage: false,

    nickname: '',
    bio: '',
    submitting: false,
    submitDone: false,

    avatarTemp: '',
    avatarDialogOpen: false,
    avatarLoading: false,
    scale: 1,
  }));

  const width: any = React.useMemo(() => props.width || 120, [props.width]);
  const ratio: any = React.useMemo(() => props.ratio || 1, [props.ratio]);
  const placeholderScale: any = React.useMemo(
    () => (props.placeholderWidth ? props.placeholderWidth / props.width : 1),
    [props.placeholderWidth, props.width],
  );
  const editorPlaceholderScale: any = React.useMemo(
    () =>
      (props.editorPlaceholderWidth
        ? props.editorPlaceholderWidth / props.width
        : 1),
    [props.editorPlaceholderWidth, props.width],
  );

  const avatarInputRef = React.useRef<HTMLInputElement>(null);
  const avatarEditorRef = React.useRef<AvatarEditor>(null);

  React.useEffect(() => {
    if (!state.showMenu) {
      (async () => {
        await sleep(200);
        state.isUploadingOriginImage = false;
      })();
    }
  }, [state, state.showMenu]);

  const handleAvatarInputChange = () => {
    const file = avatarInputRef.current!.files![0];
    state.mimeType = file.type;
    avatarInputRef.current!.value = '';
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', async () => {
        if (props.useOriginImage) {
          state.isUploadingOriginImage = true;
          const url = reader.result as string;
          const ret: any = await Base64.getFromBlobUrl(url);
          props.getImageUrl(ret.url);
          await sleep(300);
          state.showMenu = false;
        } else {
          state.avatarTemp = reader.result as string;
          state.avatarDialogOpen = true;
        }
      });
      reader.readAsDataURL(file);
    }
  };

  const handlePresetImageSelect = action((url: string) => {
    props.getImageUrl(url);
    state.showPresetImages = false;
    state.showMenu = false;
  });

  const handleAvatarSubmit = async () => {
    if (state.avatarLoading) {
      return;
    }

    state.avatarLoading = true;

    const imageElement = new Image();
    if (state.proxyImageUrl) {
      imageElement.setAttribute('crossorigin', 'anonymous');
      imageElement.src = state.proxyImageUrl;
    } else {
      imageElement.src = state.avatarTemp;
    }

    if (state.proxyImageUrl) {
      await new Promise((resolve, reject) => {
        imageElement.onload = resolve;
        imageElement.onerror = reject;
      });
    }

    const crop = avatarEditorRef.current!.getCroppingRect();
    const imageBase64 = getCroppedImg(
      imageElement,
      crop,
      width,
      state.mimeType,
    );

    const url = imageBase64;
    props.getImageUrl(url);
    await sleep(500);
    state.avatarLoading = false;
    state.avatarDialogOpen = false;
    state.showMenu = false;
  };

  React.useEffect(() => {
    if (!state.avatarDialogOpen) {
      state.scale = 1;
      state.proxyImageUrl = '';
      state.mimeType = '';
      state.avatarTemp = '';
    }
  }, [state, state.avatarDialogOpen]);

  const Content = () => (
    <div>
      <div>
        <div className="text-center text-18 pt-8 pb-4 font-bold">
          {lang.avatar.moveOrDragImage}
        </div>
      </div>
      <div className="px-10 mt-2">
        <div className="md:mx-5 w-[220px]">
          <div
            className="relative mx-auto"
            style={{
              width: width * editorPlaceholderScale,
              height: (width * editorPlaceholderScale) / ratio,
            }}
          >
            <div
              className="top-0 canvas-container absolute"
              style={{
                transformOrigin: 'top',
                transform: `translateX(-50%) scale(${editorPlaceholderScale})`,
                left: '50%',
              }}
            >
              <AvatarEditor
                ref={avatarEditorRef}
                width={width}
                height={width / ratio}
                border={0}
                scale={state.scale}
                image={state.proxyImageUrl || state.avatarTemp}
              />
            </div>
          </div>

          <div className="slider-box flex items-center text-gray-500 relative mt-[0px]  py-[14px] px-0 text-28">
            <div className="text-20 opacity-50 absolute top-0 left-0 mt-[9px] -ml-6">
              <RiZoomOutLine />
            </div>
            <AvatarScaleSlider
              step={0.001}
              min={1}
              max={2}
              onChange={(_e, v) => {
                state.scale = v as number;
              }}
            />
            <div className="text-20 opacity-50 absolute top-0 right-0 mt-[9px] -mr-6">
              <RiZoomInLine />
            </div>
          </div>
          <div className="mt-4 px-3 flex pb-8 justify-center">
            <Button
              outline
              color="gray"
              onClick={() => { state.avatarDialogOpen = false; }}
              className="mr-5"
            >
              {lang.operations.back}
            </Button>
            <Button onClick={handleAvatarSubmit} isDoing={state.avatarLoading}>
              {lang.operations.confirm}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`image-editor bg-white ml-1 relative ${props.className}`}
    >
      <div
        className={classNames(
          {
            'rounded-full': props.roundedFull,
            'rounded-8': !props.roundedFull,
          },
          'avatar-edit-box group',
        )}
        onClick={() => { state.showMenu = true; }}
        style={{
          width: width * placeholderScale,
          height: (width * placeholderScale) / ratio,
        }}
        ref={props.openerRef}
      >
        {!!props.imageUrl && <img src={props.imageUrl} alt="avatar" />}
        {!!props.imageUrl && (
          <div className="flex items-center justify-center edit-button-wrap invisible group-hover:visible">
            <div className="edit-button text-12 flex items-center justify-center">
              <MdEdit className="edit-icon mr-[2px]" />
              {lang.avatar.replace}{props.name || ''}
            </div>
          </div>
        )}
        {!props.imageUrl && (
          <div
            className="flex items-center justify-center text-3xl bg-gray-200 text-gray-500"
            style={{
              width: width * placeholderScale,
              height: (width * placeholderScale) / ratio,
            }}
          >
            <div className="flex flex-col items-center pt-3-px">
              <MdCameraAlt />
              <div className="text-12 mt-1">{lang.avatar.upload}{props.name || lang.avatar.image}</div>
            </div>
          </div>
        )}
      </div>

      <div>
        <input
          ref={avatarInputRef}
          hidden
          onChange={handleAvatarInputChange}
          accept="image/*"
          type="file"
        />
      </div>

      <Menu
        open={state.showMenu}
        close={() => {
          state.showMenu = false;
        }}
        loading={state.isUploadingOriginImage}
        showAvatarSelect={props.showAvatarSelect}
        avatarMaker={props.avatarMaker}
        selectMenuItem={(action) => {
          if (action === 'upload') {
            avatarInputRef.current!.click();
          } else if (action === 'openImageLib') {
            state.showImageLib = true;
          } else if (action === 'openPresetImages') {
            state.showPresetImages = true;
          } else if (action === 'makeAvatar') {
            shell.openExternal('https://cvbox.org/');
          }
        }}
      />

      <ImageLibModal
        open={state.showImageLib}
        close={() => { state.showImageLib = false; }}
        selectImage={async (url: string) => {
          if (props.useOriginImage) {
            state.showImageLib = false;
            state.isUploadingOriginImage = true;
            const ret: any = await Base64.getFromBlobUrl(url);
            props.getImageUrl(ret.url);
            await sleep(300);
            state.avatarLoading = false;
            state.showMenu = false;
          } else {
            state.showImageLib = false;
            state.proxyImageUrl = url;
            state.mimeType = MimeType.getByExt(url.split('.').pop()!);
            state.avatarDialogOpen = true;
          }
        }}
      />

      <PresetImagesModal
        open={state.showPresetImages}
        close={() => { state.showPresetImages = false; }}
        onSelect={handlePresetImageSelect}
      />

      <Dialog
        maxWidth={false}
        className="setting-avatar-crop-dialog"
        onClose={() => {
          if (!state.avatarLoading) {
            state.avatarDialogOpen = false;
          }
        }}
        open={state.avatarDialogOpen}
      >
        {Content()}
      </Dialog>
    </div>
  );
});

const AvatarScaleSlider = withStyles({
  root: {
    height: 6,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus,&:hover,&:active': {
      boxShadow: 'inherit',
    },
  },
  track: {
    height: 6,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
  },
})(Slider);

const getCroppedImg = (
  image: HTMLImageElement,
  crop: { x: number, y: number, width: number, height: number },
  width: number,
  mimeType: string,
) => {
  const canvas = document.createElement('canvas');
  const state = {
    sx: image.naturalWidth * crop.x,
    sy: image.naturalHeight * crop.y,
    sWidth: image.naturalWidth * crop.width,
    sHeight: image.naturalHeight * crop.height,
    dx: 0,
    dy: 0,
    dWidth: image.naturalWidth * crop.width,
    dHeight: image.naturalHeight * crop.height,
  };

  if (state.sWidth > width || state.sHeight > width) {
    const ratio = state.sWidth > state.sHeight
      ? width / state.sWidth
      : width / state.sHeight;

    state.dWidth *= ratio;
    state.dHeight *= ratio;
  }

  canvas.width = state.dWidth;
  canvas.height = state.dHeight;
  const ctx = canvas.getContext('2d');

  ctx!.drawImage(
    image,
    state.sx,
    state.sy,
    state.sWidth,
    state.sHeight,
    state.dx,
    state.dy,
    state.dWidth,
    state.dHeight,
  );

  return canvas.toDataURL(mimeType || 'image/png', 1);
};
