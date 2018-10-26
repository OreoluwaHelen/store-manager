import jwt from 'jsonwebtoken';

const isUserAuthentication = (req, res, next) => {
    const {token} = req.headers;
    jwt.verify(token, 'secret', (err, decoded) =>{
        if (err || !decoded){
            return res.status(401).json({
                message: 'inalid token',
            })
        }

        req.decoded = decoded;
        next();
    })

}

export default isUserAuthentication;
