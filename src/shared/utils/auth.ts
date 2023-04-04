import { Request} from "express";
import { ROLE } from "../../domain/models/UserModel";
import { get } from "lodash";
import { verifyJwt } from "./jwt";



export const jwtAuth = (req: Request, role: ROLE[] | null = null) => {

        const accessToken = get(req, "headers.authorization", "").replace('Bearer ', "")

        if (!accessToken) {
            throw new Error("Not authorized please Register or login")
        }

        // Checking validness of token
        const response = verifyJwt(accessToken)
        if (response['expired']) {
            throw new Error('Token is invalid ')
        }


        // checking roles
        if (role && !(role.includes(response.decoded['role']))) {
            throw new Error("You do not have permission to this operation")
        }

        return response.decoded

}
