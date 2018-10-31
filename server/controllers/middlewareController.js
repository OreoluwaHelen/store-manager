import jwt from 'jsonwebtoken';

const isUserAuthentication = (req, res, next) => {
    const {token} = req.headers;
    jwt.verify(token, 'secret', (err, decoded) =>{
        if (err || !decoded){
            return res.status(401).json({
                message: 'invalid token',
            })
        }
        req.decoded = decoded;
        next();
    })

}

const isUserAdmin = (req, res, next) => {
    const { user_type } = req.decoded;
    if (user_type === 2) {
        return res.status(401).json({
            message: 'Only Admin Can do This'
        })
    }
    next();
}

export default {
    isUserAuthentication,
    isUserAdmin
};
