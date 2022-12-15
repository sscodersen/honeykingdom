import Report from '@components/Shared/Modal/Report';
import { Modal } from '@components/UI/Modal';
import type { SphrexPublication } from '@generated/types';
import { EmojiHappyIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import type { FC } from 'react';
import { useGlobalModalStateStore } from 'src/store/modals';

import Status from './Status';

const GlobalModals: FC = () => {
  // Report modal state
  const showReportModal = useGlobalModalStateStore((state) => state.showReportModal);
  const reportPublication = useGlobalModalStateStore((state) => state.reportPublication);
  const setShowReportModal = useGlobalModalStateStore((state) => state.setShowReportModal);
  const showStatusModal = useGlobalModalStateStore((state) => state.showStatusModal);
  const setShowStatusModal = useGlobalModalStateStore((state) => state.setShowStatusModal);

  return (
    <>
      <Modal
        title="Report"
        icon={<ShieldCheckIcon className="w-5 h-5 text-brand" />}
        show={showReportModal}
        onClose={() => setShowReportModal(false, reportPublication)}
      >
        <Report publication={reportPublication as SphrexPublication} />
      </Modal>
      <Modal
        title="Set Status"
        icon={<EmojiHappyIcon className="w-5 h-5 text-brand" />}
        show={showStatusModal}
        onClose={() => setShowStatusModal(false)}
      >
        <Status />
      </Modal>
    </>
  );
};

export default GlobalModals;
