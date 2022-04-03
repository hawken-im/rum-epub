import React from 'react';
import { createRoot } from 'react-dom/client';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { GroupStatus, IGroup } from '~/apis';
import { Tooltip, Dialog } from '@mui/material';

import ago from '~/utils/ago';
import { i18n } from '~/service';
import { lang } from '~/utils/lang';
import { ThemeRoot } from '~/utils/theme';

export const groupInfo = async (group: IGroup) => new Promise<void>((rs) => {
  const div = document.createElement('div');
  const root = createRoot(div);
  document.body.append(div);
  const unmount = () => {
    root.unmount();
    div.remove();
  };
  root.render(
    (
      <ThemeRoot>
        <GroupInfo
          group={group}
          rs={() => {
            rs();
            setTimeout(unmount, 3000);
          }}
        />
      </ThemeRoot>
    ),
  );
});


interface Props {
  group: IGroup
  rs: () => unknown
}

const GroupInfo = observer((props: Props) => {
  const state = useLocalObservable(() => ({
    loading: true,
    open: true,
    owner: {} as any,
  }));

  // const database = useDatabase();
  // const { activeGroupStore } = useStore();

  const handleClose = action(() => {
    state.open = false;
    props.rs();
  });

  const status = {
    [GroupStatus.IDLE]: lang.idle,
    [GroupStatus.SYNCING]: lang.syncing,
    [GroupStatus.SYNC_FAILED]: lang.syncFailed,
  };
  const width = i18n.state.lang === 'cn' ? 'w-20' : 'w-32';

  // React.useEffect(() => {
  //   (async () => {
  //     const db = database;
  //     const user = await PersonModel.getUser(db, {
  //       GroupId: props.group.group_id,
  //       Publisher: props.group.owner_pubkey,
  //     });
  //     state.owner = user;
  //     state.loading = false;
  //   })();
  // }, []);

  // const goToUserPage = async (publisher: string) => {
  //   handleClose();
  //   await sleep(300);
  //   activeGroupStore.setObjectsFilter({
  //     type: ObjectsFilterType.SOMEONE,
  //     publisher,
  //   });
  // };

  return (
    <Dialog
      open={state.open}
      onClose={handleClose}
    >
      <div className="bg-white rounded-0 p-8">
        <div className="pt-2 px-6 pb-5">
          <div className="text-18 font-bold text-gray-700 text-center pb-5">
            {lang.groupInfo}
          </div>
          <div className="p-6 text-gray-88 text-13 border border-gray-d8 rounded-0 shadow">
            <div className="flex items-center">
              <span className={width}>{lang.name}：</span>
              <span className="text-gray-4a opacity-90">
                {props.group.group_name}
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <span className={width}>ID：</span>
              <span className="text-gray-4a opacity-90">
                {props.group.group_id}
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <span className={width}>{lang.highestBlockId}：</span>
              <span className="text-gray-4a opacity-90">
                {props.group.highest_block_id}
              </span>
            </div>
            {/* <div className="mt-4 flex items-center">
              <span className={width}>{lang.owner}：</span>
              {!state.loading && (
                <div
                  className="opacity-90 cursor-pointer text-blue-500"
                  onClick={() => {
                    goToUserPage(state.owner.publisher);
                  }}
                >
                  {state.owner.profile.name}
                </div>
              )}
            </div> */}
            <div className="mt-4 flex items-center">
              <span className={width}>{lang.highestHeight}：</span>
              <span className="text-gray-4a opacity-90">
                {props.group.highest_height}
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <span className={width}>{lang.lastUpdated}：</span>
              <span className="text-gray-4a opacity-90">
                {ago(props.group.last_updated)}
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <span className={width}>{lang.status}：</span>
              <span className="text-gray-4a opacity-90">
                <Tooltip title={props.group.group_status} placement="right">
                  <span>
                    {status[props.group.group_status]}
                  </span>
                </Tooltip>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
});
