import CtaPopUpModal from '@/components/shared/cta-popup-modal';
import { CTATrigger } from '@/components/shared/cta-trigger';
import ModalForm from '@/components/shared/modal-form';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <ModalForm />
      <CTATrigger />
      <CtaPopUpModal />
    </div>
  );
}
