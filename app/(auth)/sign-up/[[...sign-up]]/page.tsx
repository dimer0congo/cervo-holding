import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC] py-32">
            <SignUp
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-[#0B2C4D] hover:bg-[#1F4E79] text-sm normal-case',
                        card: 'shadow-2xl border border-[#E2E8F0] rounded-2xl',
                        headerTitle: 'text-[#0B2C4D] font-serif',
                        dividerLine: 'bg-[#E2E8F0]',
                        dividerText: 'text-[#64748B]',
                        footerActionLink: 'text-[#C9A24D] hover:text-[#0B2C4D]'
                    }
                }}
            />
        </div>
    );
}
