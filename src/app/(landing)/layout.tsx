import CtaPopUpModal from '@/components/shared/cta-popup-modal';
import CustomModal from '@/components/shared/custom-modal';
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full">
      {children}
      <CustomModal />
      <CtaPopUpModal />
    </div>
  );
}
