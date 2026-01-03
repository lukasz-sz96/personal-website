export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 md:py-0">
            {children}
        </div>
    );
};
