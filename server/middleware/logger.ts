

const loggerMiddleware = (req: Request, resp: Response, next: () => void) => {

    console.log('Request logged:', req.method, req.url)
    next()
}

export default loggerMiddleware