
const apiURL = process.env.NEXT_PUBLIC_middlewareAPI_FrontendURL;
const apiMiddleware = process.env.NEXT_PUBLIC_middlewareAPI_Frontend;

export const callMiddlewareApi = async ({ targetEndpoint, payload }: any) => {
    try {
        const res = await fetch(`${apiURL}/${apiMiddleware}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-frontend-auth': process.env.NEXT_PUBLIC_FRONTEND_SECRET_TOKEN || '', // secure token
            },
            body: JSON.stringify({
                targetEndpoint: `frontend/${targetEndpoint}`,
                ...payload,
            }),
        });

        const data = await res.json();
        return { success: res.ok, data, message: data.message };
    } catch (error) {
        return { success: false, message: 'Middleware error' };
    }
};
