import CtaPopUpModal from '@/components/shared/cta-popup-modal';
import { CTATrigger } from '@/components/shared/cta-trigger';
import MaskImage from '@/components/shared/mask-image';
import ModalForm from '@/components/shared/modal-form';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      {children}
      <MaskImage className="pointer-events-none" />
      <ModalForm />
      <CTATrigger />
      <CtaPopUpModal />
    </section>
  );
}
