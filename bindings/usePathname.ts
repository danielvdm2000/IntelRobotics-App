import { useRouter } from "next/dist/client/router";

function usePathname(): string {
    const router = useRouter();
    return router.pathname;
}

export default usePathname;