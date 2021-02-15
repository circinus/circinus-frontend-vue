import { IContext } from '@/router/IContext';
import { IMiddleware } from '@/router/middleware/IMiddleware';

function middlewarePipeline(context: IContext, middleware: Array<IMiddleware>, index: number) {
    const nextMiddleware: IMiddleware = middleware[index];

    if (!nextMiddleware) {
        return context.next;
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        );

        nextMiddleware({ ...context, next: nextPipeline });
    };
}

export default middlewarePipeline;
