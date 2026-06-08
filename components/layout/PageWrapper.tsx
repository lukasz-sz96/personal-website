export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            data-chat-inert-target
            className="flex flex-col items-center justify-center min-h-screen py-8 md:py-0 max-w-7xl mx-auto w-full"
        >
            {children}
        </div>
    );
};
