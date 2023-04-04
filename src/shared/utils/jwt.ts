import jwt from "jsonwebtoken"


export function signJwt(object: Object , _options?: jwt.SignOptions) {
    const token = jwt.sign(object, `secret key`, { expiresIn: '30m'} );
    return token
}





export function verifyJwt(token: string | undefined) {
    if (!token){
        throw new Error('Auth Token is not provided')
    }


    const result: Record<string, any> = {
        valid: false,
        expired: true,
        decoded: ''
    }

    try {
        result.decoded = jwt.verify(token, `secret key`)
        result.valid = true;
        result.expired = false;

        return result;
    } catch (error: any) {
        console.log("error")
        return result
    }
}