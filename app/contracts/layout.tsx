import ContractsSeoEnhancer from "@/components/contracts/ContractsSeoEnhancer";

export default function ContractsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContractsSeoEnhancer />
    </>
  );
}
