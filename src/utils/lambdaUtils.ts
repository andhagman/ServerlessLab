
interface IResponse {
    statusCode: number;
    headers: {
        'Access-Control-Allow-Origin': '*';
    };
    body: string;
    isBase64Encoded?: boolean;
}

export type LambdaCallback = (err: null, res: IResponse) => any;

export interface ILambdaFunctionResponse {
    statusCode: number;
    response: any;
}

type LambdaFunction = (event, context) => Promise<ILambdaFunctionResponse>;


export const lambdaHttpHandler = (func: LambdaFunction) => async (event: any, context: any, callback: LambdaCallback): Promise<LambdaCallback> => {

    try {
        const { statusCode, response } = await func(event, context);

        return callback(null, {
            statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(response)
        });
    } catch (err) {
        return callback(null, {
            statusCode: err.statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(err.message)
        });
    }
};
