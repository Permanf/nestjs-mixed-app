// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// @Injectable()
// export class RefreshJwtStrategy extends PassportStrategy(Strategy,'jwt-refresh') {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
//       ignoreExpiration: false,
//       secretOrKey: `${process.env.JWT_SECRET}`,
//     });
//     console.log("here")
//   }

//   async validate(payload: any) {
//     console.log(payload,"---refesh")
//     return { user: payload.sub, username: payload.username };
//   }
// }