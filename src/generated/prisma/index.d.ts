
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Data_PT
 * 
 */
export type Data_PT = $Result.DefaultSelection<Prisma.$Data_PTPayload>
/**
 * Model Survey
 * 
 */
export type Survey = $Result.DefaultSelection<Prisma.$SurveyPayload>
/**
 * Model Survey_Field
 * 
 */
export type Survey_Field = $Result.DefaultSelection<Prisma.$Survey_FieldPayload>
/**
 * Model Survey_Response
 * 
 */
export type Survey_Response = $Result.DefaultSelection<Prisma.$Survey_ResponsePayload>
/**
 * Model Survey_Response_Field
 * 
 */
export type Survey_Response_Field = $Result.DefaultSelection<Prisma.$Survey_Response_FieldPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  admin: 'admin',
  user: 'user',
  guest: 'guest'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.data_PT`: Exposes CRUD operations for the **Data_PT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data_PTS
    * const data_PTS = await prisma.data_PT.findMany()
    * ```
    */
  get data_PT(): Prisma.Data_PTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survey`: Exposes CRUD operations for the **Survey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveys
    * const surveys = await prisma.survey.findMany()
    * ```
    */
  get survey(): Prisma.SurveyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survey_Field`: Exposes CRUD operations for the **Survey_Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Survey_Fields
    * const survey_Fields = await prisma.survey_Field.findMany()
    * ```
    */
  get survey_Field(): Prisma.Survey_FieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survey_Response`: Exposes CRUD operations for the **Survey_Response** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Survey_Responses
    * const survey_Responses = await prisma.survey_Response.findMany()
    * ```
    */
  get survey_Response(): Prisma.Survey_ResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survey_Response_Field`: Exposes CRUD operations for the **Survey_Response_Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Survey_Response_Fields
    * const survey_Response_Fields = await prisma.survey_Response_Field.findMany()
    * ```
    */
  get survey_Response_Field(): Prisma.Survey_Response_FieldDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Data_PT: 'Data_PT',
    Survey: 'Survey',
    Survey_Field: 'Survey_Field',
    Survey_Response: 'Survey_Response',
    Survey_Response_Field: 'Survey_Response_Field'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "data_PT" | "survey" | "survey_Field" | "survey_Response" | "survey_Response_Field"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Data_PT: {
        payload: Prisma.$Data_PTPayload<ExtArgs>
        fields: Prisma.Data_PTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Data_PTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Data_PTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>
          }
          findFirst: {
            args: Prisma.Data_PTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Data_PTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>
          }
          findMany: {
            args: Prisma.Data_PTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>[]
          }
          create: {
            args: Prisma.Data_PTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>
          }
          createMany: {
            args: Prisma.Data_PTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Data_PTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>[]
          }
          delete: {
            args: Prisma.Data_PTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>
          }
          update: {
            args: Prisma.Data_PTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>
          }
          deleteMany: {
            args: Prisma.Data_PTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Data_PTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Data_PTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>[]
          }
          upsert: {
            args: Prisma.Data_PTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Data_PTPayload>
          }
          aggregate: {
            args: Prisma.Data_PTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateData_PT>
          }
          groupBy: {
            args: Prisma.Data_PTGroupByArgs<ExtArgs>
            result: $Utils.Optional<Data_PTGroupByOutputType>[]
          }
          count: {
            args: Prisma.Data_PTCountArgs<ExtArgs>
            result: $Utils.Optional<Data_PTCountAggregateOutputType> | number
          }
        }
      }
      Survey: {
        payload: Prisma.$SurveyPayload<ExtArgs>
        fields: Prisma.SurveyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findFirst: {
            args: Prisma.SurveyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          findMany: {
            args: Prisma.SurveyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          create: {
            args: Prisma.SurveyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          createMany: {
            args: Prisma.SurveyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurveyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          delete: {
            args: Prisma.SurveyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          update: {
            args: Prisma.SurveyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          deleteMany: {
            args: Prisma.SurveyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurveyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>[]
          }
          upsert: {
            args: Prisma.SurveyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyPayload>
          }
          aggregate: {
            args: Prisma.SurveyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey>
          }
          groupBy: {
            args: Prisma.SurveyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyCountAggregateOutputType> | number
          }
        }
      }
      Survey_Field: {
        payload: Prisma.$Survey_FieldPayload<ExtArgs>
        fields: Prisma.Survey_FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Survey_FieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Survey_FieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>
          }
          findFirst: {
            args: Prisma.Survey_FieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Survey_FieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>
          }
          findMany: {
            args: Prisma.Survey_FieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>[]
          }
          create: {
            args: Prisma.Survey_FieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>
          }
          createMany: {
            args: Prisma.Survey_FieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Survey_FieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>[]
          }
          delete: {
            args: Prisma.Survey_FieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>
          }
          update: {
            args: Prisma.Survey_FieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>
          }
          deleteMany: {
            args: Prisma.Survey_FieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Survey_FieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Survey_FieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>[]
          }
          upsert: {
            args: Prisma.Survey_FieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_FieldPayload>
          }
          aggregate: {
            args: Prisma.Survey_FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey_Field>
          }
          groupBy: {
            args: Prisma.Survey_FieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<Survey_FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.Survey_FieldCountArgs<ExtArgs>
            result: $Utils.Optional<Survey_FieldCountAggregateOutputType> | number
          }
        }
      }
      Survey_Response: {
        payload: Prisma.$Survey_ResponsePayload<ExtArgs>
        fields: Prisma.Survey_ResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Survey_ResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Survey_ResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>
          }
          findFirst: {
            args: Prisma.Survey_ResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Survey_ResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>
          }
          findMany: {
            args: Prisma.Survey_ResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>[]
          }
          create: {
            args: Prisma.Survey_ResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>
          }
          createMany: {
            args: Prisma.Survey_ResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Survey_ResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>[]
          }
          delete: {
            args: Prisma.Survey_ResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>
          }
          update: {
            args: Prisma.Survey_ResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>
          }
          deleteMany: {
            args: Prisma.Survey_ResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Survey_ResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Survey_ResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>[]
          }
          upsert: {
            args: Prisma.Survey_ResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_ResponsePayload>
          }
          aggregate: {
            args: Prisma.Survey_ResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey_Response>
          }
          groupBy: {
            args: Prisma.Survey_ResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Survey_ResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.Survey_ResponseCountArgs<ExtArgs>
            result: $Utils.Optional<Survey_ResponseCountAggregateOutputType> | number
          }
        }
      }
      Survey_Response_Field: {
        payload: Prisma.$Survey_Response_FieldPayload<ExtArgs>
        fields: Prisma.Survey_Response_FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Survey_Response_FieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Survey_Response_FieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>
          }
          findFirst: {
            args: Prisma.Survey_Response_FieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Survey_Response_FieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>
          }
          findMany: {
            args: Prisma.Survey_Response_FieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>[]
          }
          create: {
            args: Prisma.Survey_Response_FieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>
          }
          createMany: {
            args: Prisma.Survey_Response_FieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Survey_Response_FieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>[]
          }
          delete: {
            args: Prisma.Survey_Response_FieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>
          }
          update: {
            args: Prisma.Survey_Response_FieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>
          }
          deleteMany: {
            args: Prisma.Survey_Response_FieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Survey_Response_FieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Survey_Response_FieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>[]
          }
          upsert: {
            args: Prisma.Survey_Response_FieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Survey_Response_FieldPayload>
          }
          aggregate: {
            args: Prisma.Survey_Response_FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvey_Response_Field>
          }
          groupBy: {
            args: Prisma.Survey_Response_FieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<Survey_Response_FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.Survey_Response_FieldCountArgs<ExtArgs>
            result: $Utils.Optional<Survey_Response_FieldCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    data_PT?: Data_PTOmit
    survey?: SurveyOmit
    survey_Field?: Survey_FieldOmit
    survey_Response?: Survey_ResponseOmit
    survey_Response_Field?: Survey_Response_FieldOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    User: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Survey: number
    Survey_Response: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Survey?: boolean | UserCountOutputTypeCountSurveyArgs
    Survey_Response?: boolean | UserCountOutputTypeCountSurvey_ResponseArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurvey_ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_ResponseWhereInput
  }


  /**
   * Count Type SurveyCountOutputType
   */

  export type SurveyCountOutputType = {
    Survey_Field: number
    Survey_Response: number
  }

  export type SurveyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Survey_Field?: boolean | SurveyCountOutputTypeCountSurvey_FieldArgs
    Survey_Response?: boolean | SurveyCountOutputTypeCountSurvey_ResponseArgs
  }

  // Custom InputTypes
  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyCountOutputType
     */
    select?: SurveyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeCountSurvey_FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_FieldWhereInput
  }

  /**
   * SurveyCountOutputType without action
   */
  export type SurveyCountOutputTypeCountSurvey_ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_ResponseWhereInput
  }


  /**
   * Count Type Survey_FieldCountOutputType
   */

  export type Survey_FieldCountOutputType = {
    Survey_Response_Field: number
  }

  export type Survey_FieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Survey_Response_Field?: boolean | Survey_FieldCountOutputTypeCountSurvey_Response_FieldArgs
  }

  // Custom InputTypes
  /**
   * Survey_FieldCountOutputType without action
   */
  export type Survey_FieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_FieldCountOutputType
     */
    select?: Survey_FieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Survey_FieldCountOutputType without action
   */
  export type Survey_FieldCountOutputTypeCountSurvey_Response_FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_Response_FieldWhereInput
  }


  /**
   * Count Type Survey_ResponseCountOutputType
   */

  export type Survey_ResponseCountOutputType = {
    Survey_Response_Field: number
  }

  export type Survey_ResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Survey_Response_Field?: boolean | Survey_ResponseCountOutputTypeCountSurvey_Response_FieldArgs
  }

  // Custom InputTypes
  /**
   * Survey_ResponseCountOutputType without action
   */
  export type Survey_ResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_ResponseCountOutputType
     */
    select?: Survey_ResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Survey_ResponseCountOutputType without action
   */
  export type Survey_ResponseCountOutputTypeCountSurvey_Response_FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_Response_FieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: $Enums.RoleName | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: $Enums.RoleName
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.RoleName
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'RoleName'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    roleId: string | null
    session_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    roleId: string | null
    session_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    roleId: number
    session_token: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    session_token?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    session_token?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roleId?: true
    session_token?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    roleId: string
    session_token: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    session_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    Survey?: boolean | User$SurveyArgs<ExtArgs>
    Survey_Response?: boolean | User$Survey_ResponseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    session_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    session_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    session_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "roleId" | "session_token" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    Survey?: boolean | User$SurveyArgs<ExtArgs>
    Survey_Response?: boolean | User$Survey_ResponseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      Survey: Prisma.$SurveyPayload<ExtArgs>[]
      Survey_Response: Prisma.$Survey_ResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      roleId: string
      session_token: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Survey<T extends User$SurveyArgs<ExtArgs> = {}>(args?: Subset<T, User$SurveyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Survey_Response<T extends User$Survey_ResponseArgs<ExtArgs> = {}>(args?: Subset<T, User$Survey_ResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly session_token: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Survey
   */
  export type User$SurveyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    cursor?: SurveyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * User.Survey_Response
   */
  export type User$Survey_ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    where?: Survey_ResponseWhereInput
    orderBy?: Survey_ResponseOrderByWithRelationInput | Survey_ResponseOrderByWithRelationInput[]
    cursor?: Survey_ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Survey_ResponseScalarFieldEnum | Survey_ResponseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Data_PT
   */

  export type AggregateData_PT = {
    _count: Data_PTCountAggregateOutputType | null
    _min: Data_PTMinAggregateOutputType | null
    _max: Data_PTMaxAggregateOutputType | null
  }

  export type Data_PTMinAggregateOutputType = {
    id: string | null
    kode: string | null
    akreditasi: string | null
    tanggal_berdiri: Date | null
    no_SK_pendirian: string | null
    tanggal_SK_pendirian: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Data_PTMaxAggregateOutputType = {
    id: string | null
    kode: string | null
    akreditasi: string | null
    tanggal_berdiri: Date | null
    no_SK_pendirian: string | null
    tanggal_SK_pendirian: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Data_PTCountAggregateOutputType = {
    id: number
    kode: number
    akreditasi: number
    tanggal_berdiri: number
    no_SK_pendirian: number
    tanggal_SK_pendirian: number
    alamat: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Data_PTMinAggregateInputType = {
    id?: true
    kode?: true
    akreditasi?: true
    tanggal_berdiri?: true
    no_SK_pendirian?: true
    tanggal_SK_pendirian?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Data_PTMaxAggregateInputType = {
    id?: true
    kode?: true
    akreditasi?: true
    tanggal_berdiri?: true
    no_SK_pendirian?: true
    tanggal_SK_pendirian?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Data_PTCountAggregateInputType = {
    id?: true
    kode?: true
    akreditasi?: true
    tanggal_berdiri?: true
    no_SK_pendirian?: true
    tanggal_SK_pendirian?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Data_PTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Data_PT to aggregate.
     */
    where?: Data_PTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data_PTS to fetch.
     */
    orderBy?: Data_PTOrderByWithRelationInput | Data_PTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Data_PTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data_PTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data_PTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Data_PTS
    **/
    _count?: true | Data_PTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Data_PTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Data_PTMaxAggregateInputType
  }

  export type GetData_PTAggregateType<T extends Data_PTAggregateArgs> = {
        [P in keyof T & keyof AggregateData_PT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData_PT[P]>
      : GetScalarType<T[P], AggregateData_PT[P]>
  }




  export type Data_PTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Data_PTWhereInput
    orderBy?: Data_PTOrderByWithAggregationInput | Data_PTOrderByWithAggregationInput[]
    by: Data_PTScalarFieldEnum[] | Data_PTScalarFieldEnum
    having?: Data_PTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Data_PTCountAggregateInputType | true
    _min?: Data_PTMinAggregateInputType
    _max?: Data_PTMaxAggregateInputType
  }

  export type Data_PTGroupByOutputType = {
    id: string
    kode: string | null
    akreditasi: string | null
    tanggal_berdiri: Date | null
    no_SK_pendirian: string | null
    tanggal_SK_pendirian: string | null
    alamat: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Data_PTCountAggregateOutputType | null
    _min: Data_PTMinAggregateOutputType | null
    _max: Data_PTMaxAggregateOutputType | null
  }

  type GetData_PTGroupByPayload<T extends Data_PTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Data_PTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Data_PTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Data_PTGroupByOutputType[P]>
            : GetScalarType<T[P], Data_PTGroupByOutputType[P]>
        }
      >
    >


  export type Data_PTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    akreditasi?: boolean
    tanggal_berdiri?: boolean
    no_SK_pendirian?: boolean
    tanggal_SK_pendirian?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["data_PT"]>

  export type Data_PTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    akreditasi?: boolean
    tanggal_berdiri?: boolean
    no_SK_pendirian?: boolean
    tanggal_SK_pendirian?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["data_PT"]>

  export type Data_PTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    akreditasi?: boolean
    tanggal_berdiri?: boolean
    no_SK_pendirian?: boolean
    tanggal_SK_pendirian?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["data_PT"]>

  export type Data_PTSelectScalar = {
    id?: boolean
    kode?: boolean
    akreditasi?: boolean
    tanggal_berdiri?: boolean
    no_SK_pendirian?: boolean
    tanggal_SK_pendirian?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Data_PTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode" | "akreditasi" | "tanggal_berdiri" | "no_SK_pendirian" | "tanggal_SK_pendirian" | "alamat" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["data_PT"]>

  export type $Data_PTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Data_PT"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kode: string | null
      akreditasi: string | null
      tanggal_berdiri: Date | null
      no_SK_pendirian: string | null
      tanggal_SK_pendirian: string | null
      alamat: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["data_PT"]>
    composites: {}
  }

  type Data_PTGetPayload<S extends boolean | null | undefined | Data_PTDefaultArgs> = $Result.GetResult<Prisma.$Data_PTPayload, S>

  type Data_PTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Data_PTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Data_PTCountAggregateInputType | true
    }

  export interface Data_PTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Data_PT'], meta: { name: 'Data_PT' } }
    /**
     * Find zero or one Data_PT that matches the filter.
     * @param {Data_PTFindUniqueArgs} args - Arguments to find a Data_PT
     * @example
     * // Get one Data_PT
     * const data_PT = await prisma.data_PT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Data_PTFindUniqueArgs>(args: SelectSubset<T, Data_PTFindUniqueArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Data_PT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Data_PTFindUniqueOrThrowArgs} args - Arguments to find a Data_PT
     * @example
     * // Get one Data_PT
     * const data_PT = await prisma.data_PT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Data_PTFindUniqueOrThrowArgs>(args: SelectSubset<T, Data_PTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_PT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTFindFirstArgs} args - Arguments to find a Data_PT
     * @example
     * // Get one Data_PT
     * const data_PT = await prisma.data_PT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Data_PTFindFirstArgs>(args?: SelectSubset<T, Data_PTFindFirstArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Data_PT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTFindFirstOrThrowArgs} args - Arguments to find a Data_PT
     * @example
     * // Get one Data_PT
     * const data_PT = await prisma.data_PT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Data_PTFindFirstOrThrowArgs>(args?: SelectSubset<T, Data_PTFindFirstOrThrowArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Data_PTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data_PTS
     * const data_PTS = await prisma.data_PT.findMany()
     * 
     * // Get first 10 Data_PTS
     * const data_PTS = await prisma.data_PT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const data_PTWithIdOnly = await prisma.data_PT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Data_PTFindManyArgs>(args?: SelectSubset<T, Data_PTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Data_PT.
     * @param {Data_PTCreateArgs} args - Arguments to create a Data_PT.
     * @example
     * // Create one Data_PT
     * const Data_PT = await prisma.data_PT.create({
     *   data: {
     *     // ... data to create a Data_PT
     *   }
     * })
     * 
     */
    create<T extends Data_PTCreateArgs>(args: SelectSubset<T, Data_PTCreateArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Data_PTS.
     * @param {Data_PTCreateManyArgs} args - Arguments to create many Data_PTS.
     * @example
     * // Create many Data_PTS
     * const data_PT = await prisma.data_PT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Data_PTCreateManyArgs>(args?: SelectSubset<T, Data_PTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Data_PTS and returns the data saved in the database.
     * @param {Data_PTCreateManyAndReturnArgs} args - Arguments to create many Data_PTS.
     * @example
     * // Create many Data_PTS
     * const data_PT = await prisma.data_PT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Data_PTS and only return the `id`
     * const data_PTWithIdOnly = await prisma.data_PT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Data_PTCreateManyAndReturnArgs>(args?: SelectSubset<T, Data_PTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Data_PT.
     * @param {Data_PTDeleteArgs} args - Arguments to delete one Data_PT.
     * @example
     * // Delete one Data_PT
     * const Data_PT = await prisma.data_PT.delete({
     *   where: {
     *     // ... filter to delete one Data_PT
     *   }
     * })
     * 
     */
    delete<T extends Data_PTDeleteArgs>(args: SelectSubset<T, Data_PTDeleteArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Data_PT.
     * @param {Data_PTUpdateArgs} args - Arguments to update one Data_PT.
     * @example
     * // Update one Data_PT
     * const data_PT = await prisma.data_PT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Data_PTUpdateArgs>(args: SelectSubset<T, Data_PTUpdateArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Data_PTS.
     * @param {Data_PTDeleteManyArgs} args - Arguments to filter Data_PTS to delete.
     * @example
     * // Delete a few Data_PTS
     * const { count } = await prisma.data_PT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Data_PTDeleteManyArgs>(args?: SelectSubset<T, Data_PTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_PTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data_PTS
     * const data_PT = await prisma.data_PT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Data_PTUpdateManyArgs>(args: SelectSubset<T, Data_PTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data_PTS and returns the data updated in the database.
     * @param {Data_PTUpdateManyAndReturnArgs} args - Arguments to update many Data_PTS.
     * @example
     * // Update many Data_PTS
     * const data_PT = await prisma.data_PT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Data_PTS and only return the `id`
     * const data_PTWithIdOnly = await prisma.data_PT.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Data_PTUpdateManyAndReturnArgs>(args: SelectSubset<T, Data_PTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Data_PT.
     * @param {Data_PTUpsertArgs} args - Arguments to update or create a Data_PT.
     * @example
     * // Update or create a Data_PT
     * const data_PT = await prisma.data_PT.upsert({
     *   create: {
     *     // ... data to create a Data_PT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data_PT we want to update
     *   }
     * })
     */
    upsert<T extends Data_PTUpsertArgs>(args: SelectSubset<T, Data_PTUpsertArgs<ExtArgs>>): Prisma__Data_PTClient<$Result.GetResult<Prisma.$Data_PTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Data_PTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTCountArgs} args - Arguments to filter Data_PTS to count.
     * @example
     * // Count the number of Data_PTS
     * const count = await prisma.data_PT.count({
     *   where: {
     *     // ... the filter for the Data_PTS we want to count
     *   }
     * })
    **/
    count<T extends Data_PTCountArgs>(
      args?: Subset<T, Data_PTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Data_PTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data_PT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Data_PTAggregateArgs>(args: Subset<T, Data_PTAggregateArgs>): Prisma.PrismaPromise<GetData_PTAggregateType<T>>

    /**
     * Group by Data_PT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Data_PTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Data_PTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Data_PTGroupByArgs['orderBy'] }
        : { orderBy?: Data_PTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Data_PTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_PTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Data_PT model
   */
  readonly fields: Data_PTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Data_PT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Data_PTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Data_PT model
   */
  interface Data_PTFieldRefs {
    readonly id: FieldRef<"Data_PT", 'String'>
    readonly kode: FieldRef<"Data_PT", 'String'>
    readonly akreditasi: FieldRef<"Data_PT", 'String'>
    readonly tanggal_berdiri: FieldRef<"Data_PT", 'DateTime'>
    readonly no_SK_pendirian: FieldRef<"Data_PT", 'String'>
    readonly tanggal_SK_pendirian: FieldRef<"Data_PT", 'String'>
    readonly alamat: FieldRef<"Data_PT", 'String'>
    readonly createdAt: FieldRef<"Data_PT", 'DateTime'>
    readonly updatedAt: FieldRef<"Data_PT", 'DateTime'>
    readonly deletedAt: FieldRef<"Data_PT", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Data_PT findUnique
   */
  export type Data_PTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * Filter, which Data_PT to fetch.
     */
    where: Data_PTWhereUniqueInput
  }

  /**
   * Data_PT findUniqueOrThrow
   */
  export type Data_PTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * Filter, which Data_PT to fetch.
     */
    where: Data_PTWhereUniqueInput
  }

  /**
   * Data_PT findFirst
   */
  export type Data_PTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * Filter, which Data_PT to fetch.
     */
    where?: Data_PTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data_PTS to fetch.
     */
    orderBy?: Data_PTOrderByWithRelationInput | Data_PTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data_PTS.
     */
    cursor?: Data_PTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data_PTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data_PTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data_PTS.
     */
    distinct?: Data_PTScalarFieldEnum | Data_PTScalarFieldEnum[]
  }

  /**
   * Data_PT findFirstOrThrow
   */
  export type Data_PTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * Filter, which Data_PT to fetch.
     */
    where?: Data_PTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data_PTS to fetch.
     */
    orderBy?: Data_PTOrderByWithRelationInput | Data_PTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data_PTS.
     */
    cursor?: Data_PTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data_PTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data_PTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data_PTS.
     */
    distinct?: Data_PTScalarFieldEnum | Data_PTScalarFieldEnum[]
  }

  /**
   * Data_PT findMany
   */
  export type Data_PTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * Filter, which Data_PTS to fetch.
     */
    where?: Data_PTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data_PTS to fetch.
     */
    orderBy?: Data_PTOrderByWithRelationInput | Data_PTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Data_PTS.
     */
    cursor?: Data_PTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data_PTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data_PTS.
     */
    skip?: number
    distinct?: Data_PTScalarFieldEnum | Data_PTScalarFieldEnum[]
  }

  /**
   * Data_PT create
   */
  export type Data_PTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * The data needed to create a Data_PT.
     */
    data: XOR<Data_PTCreateInput, Data_PTUncheckedCreateInput>
  }

  /**
   * Data_PT createMany
   */
  export type Data_PTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Data_PTS.
     */
    data: Data_PTCreateManyInput | Data_PTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Data_PT createManyAndReturn
   */
  export type Data_PTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * The data used to create many Data_PTS.
     */
    data: Data_PTCreateManyInput | Data_PTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Data_PT update
   */
  export type Data_PTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * The data needed to update a Data_PT.
     */
    data: XOR<Data_PTUpdateInput, Data_PTUncheckedUpdateInput>
    /**
     * Choose, which Data_PT to update.
     */
    where: Data_PTWhereUniqueInput
  }

  /**
   * Data_PT updateMany
   */
  export type Data_PTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Data_PTS.
     */
    data: XOR<Data_PTUpdateManyMutationInput, Data_PTUncheckedUpdateManyInput>
    /**
     * Filter which Data_PTS to update
     */
    where?: Data_PTWhereInput
    /**
     * Limit how many Data_PTS to update.
     */
    limit?: number
  }

  /**
   * Data_PT updateManyAndReturn
   */
  export type Data_PTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * The data used to update Data_PTS.
     */
    data: XOR<Data_PTUpdateManyMutationInput, Data_PTUncheckedUpdateManyInput>
    /**
     * Filter which Data_PTS to update
     */
    where?: Data_PTWhereInput
    /**
     * Limit how many Data_PTS to update.
     */
    limit?: number
  }

  /**
   * Data_PT upsert
   */
  export type Data_PTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * The filter to search for the Data_PT to update in case it exists.
     */
    where: Data_PTWhereUniqueInput
    /**
     * In case the Data_PT found by the `where` argument doesn't exist, create a new Data_PT with this data.
     */
    create: XOR<Data_PTCreateInput, Data_PTUncheckedCreateInput>
    /**
     * In case the Data_PT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Data_PTUpdateInput, Data_PTUncheckedUpdateInput>
  }

  /**
   * Data_PT delete
   */
  export type Data_PTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
    /**
     * Filter which Data_PT to delete.
     */
    where: Data_PTWhereUniqueInput
  }

  /**
   * Data_PT deleteMany
   */
  export type Data_PTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Data_PTS to delete
     */
    where?: Data_PTWhereInput
    /**
     * Limit how many Data_PTS to delete.
     */
    limit?: number
  }

  /**
   * Data_PT without action
   */
  export type Data_PTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data_PT
     */
    select?: Data_PTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Data_PT
     */
    omit?: Data_PTOmit<ExtArgs> | null
  }


  /**
   * Model Survey
   */

  export type AggregateSurvey = {
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  export type SurveyMinAggregateOutputType = {
    id: string | null
    userID: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SurveyMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SurveyCountAggregateOutputType = {
    id: number
    userID: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SurveyMinAggregateInputType = {
    id?: true
    userID?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SurveyMaxAggregateInputType = {
    id?: true
    userID?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SurveyCountAggregateInputType = {
    id?: true
    userID?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SurveyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey to aggregate.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surveys
    **/
    _count?: true | SurveyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyMaxAggregateInputType
  }

  export type GetSurveyAggregateType<T extends SurveyAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey[P]>
      : GetScalarType<T[P], AggregateSurvey[P]>
  }




  export type SurveyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyWhereInput
    orderBy?: SurveyOrderByWithAggregationInput | SurveyOrderByWithAggregationInput[]
    by: SurveyScalarFieldEnum[] | SurveyScalarFieldEnum
    having?: SurveyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyCountAggregateInputType | true
    _min?: SurveyMinAggregateInputType
    _max?: SurveyMaxAggregateInputType
  }

  export type SurveyGroupByOutputType = {
    id: string
    userID: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SurveyCountAggregateOutputType | null
    _min: SurveyMinAggregateOutputType | null
    _max: SurveyMaxAggregateOutputType | null
  }

  type GetSurveyGroupByPayload<T extends SurveyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyGroupByOutputType[P]>
        }
      >
    >


  export type SurveySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Survey_Field?: boolean | Survey$Survey_FieldArgs<ExtArgs>
    Survey_Response?: boolean | Survey$Survey_ResponseArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type SurveySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type SurveySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey"]>

  export type SurveySelectScalar = {
    id?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SurveyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["survey"]>
  export type SurveyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Survey_Field?: boolean | Survey$Survey_FieldArgs<ExtArgs>
    Survey_Response?: boolean | Survey$Survey_ResponseArgs<ExtArgs>
    _count?: boolean | SurveyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurveyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SurveyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SurveyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Survey_Field: Prisma.$Survey_FieldPayload<ExtArgs>[]
      Survey_Response: Prisma.$Survey_ResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["survey"]>
    composites: {}
  }

  type SurveyGetPayload<S extends boolean | null | undefined | SurveyDefaultArgs> = $Result.GetResult<Prisma.$SurveyPayload, S>

  type SurveyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurveyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurveyCountAggregateInputType | true
    }

  export interface SurveyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey'], meta: { name: 'Survey' } }
    /**
     * Find zero or one Survey that matches the filter.
     * @param {SurveyFindUniqueArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyFindUniqueArgs>(args: SelectSubset<T, SurveyFindUniqueArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Survey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurveyFindUniqueOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyFindFirstArgs>(args?: SelectSubset<T, SurveyFindFirstArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindFirstOrThrowArgs} args - Arguments to find a Survey
     * @example
     * // Get one Survey
     * const survey = await prisma.survey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surveys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveys
     * const surveys = await prisma.survey.findMany()
     * 
     * // Get first 10 Surveys
     * const surveys = await prisma.survey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyWithIdOnly = await prisma.survey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyFindManyArgs>(args?: SelectSubset<T, SurveyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Survey.
     * @param {SurveyCreateArgs} args - Arguments to create a Survey.
     * @example
     * // Create one Survey
     * const Survey = await prisma.survey.create({
     *   data: {
     *     // ... data to create a Survey
     *   }
     * })
     * 
     */
    create<T extends SurveyCreateArgs>(args: SelectSubset<T, SurveyCreateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surveys.
     * @param {SurveyCreateManyArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyCreateManyArgs>(args?: SelectSubset<T, SurveyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surveys and returns the data saved in the database.
     * @param {SurveyCreateManyAndReturnArgs} args - Arguments to create many Surveys.
     * @example
     * // Create many Surveys
     * const survey = await prisma.survey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surveys and only return the `id`
     * const surveyWithIdOnly = await prisma.survey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurveyCreateManyAndReturnArgs>(args?: SelectSubset<T, SurveyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Survey.
     * @param {SurveyDeleteArgs} args - Arguments to delete one Survey.
     * @example
     * // Delete one Survey
     * const Survey = await prisma.survey.delete({
     *   where: {
     *     // ... filter to delete one Survey
     *   }
     * })
     * 
     */
    delete<T extends SurveyDeleteArgs>(args: SelectSubset<T, SurveyDeleteArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Survey.
     * @param {SurveyUpdateArgs} args - Arguments to update one Survey.
     * @example
     * // Update one Survey
     * const survey = await prisma.survey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyUpdateArgs>(args: SelectSubset<T, SurveyUpdateArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surveys.
     * @param {SurveyDeleteManyArgs} args - Arguments to filter Surveys to delete.
     * @example
     * // Delete a few Surveys
     * const { count } = await prisma.survey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyDeleteManyArgs>(args?: SelectSubset<T, SurveyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyUpdateManyArgs>(args: SelectSubset<T, SurveyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveys and returns the data updated in the database.
     * @param {SurveyUpdateManyAndReturnArgs} args - Arguments to update many Surveys.
     * @example
     * // Update many Surveys
     * const survey = await prisma.survey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surveys and only return the `id`
     * const surveyWithIdOnly = await prisma.survey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SurveyUpdateManyAndReturnArgs>(args: SelectSubset<T, SurveyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Survey.
     * @param {SurveyUpsertArgs} args - Arguments to update or create a Survey.
     * @example
     * // Update or create a Survey
     * const survey = await prisma.survey.upsert({
     *   create: {
     *     // ... data to create a Survey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey we want to update
     *   }
     * })
     */
    upsert<T extends SurveyUpsertArgs>(args: SelectSubset<T, SurveyUpsertArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surveys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyCountArgs} args - Arguments to filter Surveys to count.
     * @example
     * // Count the number of Surveys
     * const count = await prisma.survey.count({
     *   where: {
     *     // ... the filter for the Surveys we want to count
     *   }
     * })
    **/
    count<T extends SurveyCountArgs>(
      args?: Subset<T, SurveyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveyAggregateArgs>(args: Subset<T, SurveyAggregateArgs>): Prisma.PrismaPromise<GetSurveyAggregateType<T>>

    /**
     * Group by Survey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SurveyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyGroupByArgs['orderBy'] }
        : { orderBy?: SurveyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SurveyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey model
   */
  readonly fields: SurveyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Survey_Field<T extends Survey$Survey_FieldArgs<ExtArgs> = {}>(args?: Subset<T, Survey$Survey_FieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Survey_Response<T extends Survey$Survey_ResponseArgs<ExtArgs> = {}>(args?: Subset<T, Survey$Survey_ResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey model
   */
  interface SurveyFieldRefs {
    readonly id: FieldRef<"Survey", 'String'>
    readonly userID: FieldRef<"Survey", 'String'>
    readonly createdAt: FieldRef<"Survey", 'DateTime'>
    readonly updatedAt: FieldRef<"Survey", 'DateTime'>
    readonly deletedAt: FieldRef<"Survey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey findUnique
   */
  export type SurveyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findUniqueOrThrow
   */
  export type SurveyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey findFirst
   */
  export type SurveyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findFirstOrThrow
   */
  export type SurveyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Survey to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surveys.
     */
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey findMany
   */
  export type SurveyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter, which Surveys to fetch.
     */
    where?: SurveyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surveys to fetch.
     */
    orderBy?: SurveyOrderByWithRelationInput | SurveyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surveys.
     */
    cursor?: SurveyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surveys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surveys.
     */
    skip?: number
    distinct?: SurveyScalarFieldEnum | SurveyScalarFieldEnum[]
  }

  /**
   * Survey create
   */
  export type SurveyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey.
     */
    data: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
  }

  /**
   * Survey createMany
   */
  export type SurveyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey createManyAndReturn
   */
  export type SurveyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * The data used to create many Surveys.
     */
    data: SurveyCreateManyInput | SurveyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey update
   */
  export type SurveyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey.
     */
    data: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
    /**
     * Choose, which Survey to update.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey updateMany
   */
  export type SurveyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
    /**
     * Limit how many Surveys to update.
     */
    limit?: number
  }

  /**
   * Survey updateManyAndReturn
   */
  export type SurveyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * The data used to update Surveys.
     */
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyInput>
    /**
     * Filter which Surveys to update
     */
    where?: SurveyWhereInput
    /**
     * Limit how many Surveys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey upsert
   */
  export type SurveyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey to update in case it exists.
     */
    where: SurveyWhereUniqueInput
    /**
     * In case the Survey found by the `where` argument doesn't exist, create a new Survey with this data.
     */
    create: XOR<SurveyCreateInput, SurveyUncheckedCreateInput>
    /**
     * In case the Survey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyUpdateInput, SurveyUncheckedUpdateInput>
  }

  /**
   * Survey delete
   */
  export type SurveyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
    /**
     * Filter which Survey to delete.
     */
    where: SurveyWhereUniqueInput
  }

  /**
   * Survey deleteMany
   */
  export type SurveyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surveys to delete
     */
    where?: SurveyWhereInput
    /**
     * Limit how many Surveys to delete.
     */
    limit?: number
  }

  /**
   * Survey.Survey_Field
   */
  export type Survey$Survey_FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    where?: Survey_FieldWhereInput
    orderBy?: Survey_FieldOrderByWithRelationInput | Survey_FieldOrderByWithRelationInput[]
    cursor?: Survey_FieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Survey_FieldScalarFieldEnum | Survey_FieldScalarFieldEnum[]
  }

  /**
   * Survey.Survey_Response
   */
  export type Survey$Survey_ResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    where?: Survey_ResponseWhereInput
    orderBy?: Survey_ResponseOrderByWithRelationInput | Survey_ResponseOrderByWithRelationInput[]
    cursor?: Survey_ResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Survey_ResponseScalarFieldEnum | Survey_ResponseScalarFieldEnum[]
  }

  /**
   * Survey without action
   */
  export type SurveyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey
     */
    select?: SurveySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey
     */
    omit?: SurveyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyInclude<ExtArgs> | null
  }


  /**
   * Model Survey_Field
   */

  export type AggregateSurvey_Field = {
    _count: Survey_FieldCountAggregateOutputType | null
    _min: Survey_FieldMinAggregateOutputType | null
    _max: Survey_FieldMaxAggregateOutputType | null
  }

  export type Survey_FieldMinAggregateOutputType = {
    id: string | null
    surveyID: string | null
    field: string | null
    type: string | null
    options: string | null
    required: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Survey_FieldMaxAggregateOutputType = {
    id: string | null
    surveyID: string | null
    field: string | null
    type: string | null
    options: string | null
    required: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Survey_FieldCountAggregateOutputType = {
    id: number
    surveyID: number
    field: number
    type: number
    options: number
    required: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Survey_FieldMinAggregateInputType = {
    id?: true
    surveyID?: true
    field?: true
    type?: true
    options?: true
    required?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Survey_FieldMaxAggregateInputType = {
    id?: true
    surveyID?: true
    field?: true
    type?: true
    options?: true
    required?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Survey_FieldCountAggregateInputType = {
    id?: true
    surveyID?: true
    field?: true
    type?: true
    options?: true
    required?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Survey_FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey_Field to aggregate.
     */
    where?: Survey_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Fields to fetch.
     */
    orderBy?: Survey_FieldOrderByWithRelationInput | Survey_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Survey_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Survey_Fields
    **/
    _count?: true | Survey_FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Survey_FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Survey_FieldMaxAggregateInputType
  }

  export type GetSurvey_FieldAggregateType<T extends Survey_FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey_Field]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey_Field[P]>
      : GetScalarType<T[P], AggregateSurvey_Field[P]>
  }




  export type Survey_FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_FieldWhereInput
    orderBy?: Survey_FieldOrderByWithAggregationInput | Survey_FieldOrderByWithAggregationInput[]
    by: Survey_FieldScalarFieldEnum[] | Survey_FieldScalarFieldEnum
    having?: Survey_FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Survey_FieldCountAggregateInputType | true
    _min?: Survey_FieldMinAggregateInputType
    _max?: Survey_FieldMaxAggregateInputType
  }

  export type Survey_FieldGroupByOutputType = {
    id: string
    surveyID: string
    field: string | null
    type: string
    options: string | null
    required: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Survey_FieldCountAggregateOutputType | null
    _min: Survey_FieldMinAggregateOutputType | null
    _max: Survey_FieldMaxAggregateOutputType | null
  }

  type GetSurvey_FieldGroupByPayload<T extends Survey_FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Survey_FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Survey_FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Survey_FieldGroupByOutputType[P]>
            : GetScalarType<T[P], Survey_FieldGroupByOutputType[P]>
        }
      >
    >


  export type Survey_FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyID?: boolean
    field?: boolean
    type?: boolean
    options?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    Survey_Response_Field?: boolean | Survey_Field$Survey_Response_FieldArgs<ExtArgs>
    _count?: boolean | Survey_FieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Field"]>

  export type Survey_FieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyID?: boolean
    field?: boolean
    type?: boolean
    options?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Field"]>

  export type Survey_FieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyID?: boolean
    field?: boolean
    type?: boolean
    options?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Field"]>

  export type Survey_FieldSelectScalar = {
    id?: boolean
    surveyID?: boolean
    field?: boolean
    type?: boolean
    options?: boolean
    required?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Survey_FieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surveyID" | "field" | "type" | "options" | "required" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["survey_Field"]>
  export type Survey_FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    Survey_Response_Field?: boolean | Survey_Field$Survey_Response_FieldArgs<ExtArgs>
    _count?: boolean | Survey_FieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Survey_FieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }
  export type Survey_FieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
  }

  export type $Survey_FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey_Field"
    objects: {
      survey: Prisma.$SurveyPayload<ExtArgs>
      Survey_Response_Field: Prisma.$Survey_Response_FieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surveyID: string
      field: string | null
      type: string
      options: string | null
      required: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["survey_Field"]>
    composites: {}
  }

  type Survey_FieldGetPayload<S extends boolean | null | undefined | Survey_FieldDefaultArgs> = $Result.GetResult<Prisma.$Survey_FieldPayload, S>

  type Survey_FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Survey_FieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Survey_FieldCountAggregateInputType | true
    }

  export interface Survey_FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey_Field'], meta: { name: 'Survey_Field' } }
    /**
     * Find zero or one Survey_Field that matches the filter.
     * @param {Survey_FieldFindUniqueArgs} args - Arguments to find a Survey_Field
     * @example
     * // Get one Survey_Field
     * const survey_Field = await prisma.survey_Field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Survey_FieldFindUniqueArgs>(args: SelectSubset<T, Survey_FieldFindUniqueArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Survey_Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Survey_FieldFindUniqueOrThrowArgs} args - Arguments to find a Survey_Field
     * @example
     * // Get one Survey_Field
     * const survey_Field = await prisma.survey_Field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Survey_FieldFindUniqueOrThrowArgs>(args: SelectSubset<T, Survey_FieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey_Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldFindFirstArgs} args - Arguments to find a Survey_Field
     * @example
     * // Get one Survey_Field
     * const survey_Field = await prisma.survey_Field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Survey_FieldFindFirstArgs>(args?: SelectSubset<T, Survey_FieldFindFirstArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey_Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldFindFirstOrThrowArgs} args - Arguments to find a Survey_Field
     * @example
     * // Get one Survey_Field
     * const survey_Field = await prisma.survey_Field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Survey_FieldFindFirstOrThrowArgs>(args?: SelectSubset<T, Survey_FieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Survey_Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Survey_Fields
     * const survey_Fields = await prisma.survey_Field.findMany()
     * 
     * // Get first 10 Survey_Fields
     * const survey_Fields = await prisma.survey_Field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const survey_FieldWithIdOnly = await prisma.survey_Field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Survey_FieldFindManyArgs>(args?: SelectSubset<T, Survey_FieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Survey_Field.
     * @param {Survey_FieldCreateArgs} args - Arguments to create a Survey_Field.
     * @example
     * // Create one Survey_Field
     * const Survey_Field = await prisma.survey_Field.create({
     *   data: {
     *     // ... data to create a Survey_Field
     *   }
     * })
     * 
     */
    create<T extends Survey_FieldCreateArgs>(args: SelectSubset<T, Survey_FieldCreateArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Survey_Fields.
     * @param {Survey_FieldCreateManyArgs} args - Arguments to create many Survey_Fields.
     * @example
     * // Create many Survey_Fields
     * const survey_Field = await prisma.survey_Field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Survey_FieldCreateManyArgs>(args?: SelectSubset<T, Survey_FieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Survey_Fields and returns the data saved in the database.
     * @param {Survey_FieldCreateManyAndReturnArgs} args - Arguments to create many Survey_Fields.
     * @example
     * // Create many Survey_Fields
     * const survey_Field = await prisma.survey_Field.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Survey_Fields and only return the `id`
     * const survey_FieldWithIdOnly = await prisma.survey_Field.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Survey_FieldCreateManyAndReturnArgs>(args?: SelectSubset<T, Survey_FieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Survey_Field.
     * @param {Survey_FieldDeleteArgs} args - Arguments to delete one Survey_Field.
     * @example
     * // Delete one Survey_Field
     * const Survey_Field = await prisma.survey_Field.delete({
     *   where: {
     *     // ... filter to delete one Survey_Field
     *   }
     * })
     * 
     */
    delete<T extends Survey_FieldDeleteArgs>(args: SelectSubset<T, Survey_FieldDeleteArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Survey_Field.
     * @param {Survey_FieldUpdateArgs} args - Arguments to update one Survey_Field.
     * @example
     * // Update one Survey_Field
     * const survey_Field = await prisma.survey_Field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Survey_FieldUpdateArgs>(args: SelectSubset<T, Survey_FieldUpdateArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Survey_Fields.
     * @param {Survey_FieldDeleteManyArgs} args - Arguments to filter Survey_Fields to delete.
     * @example
     * // Delete a few Survey_Fields
     * const { count } = await prisma.survey_Field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Survey_FieldDeleteManyArgs>(args?: SelectSubset<T, Survey_FieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Survey_Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Survey_Fields
     * const survey_Field = await prisma.survey_Field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Survey_FieldUpdateManyArgs>(args: SelectSubset<T, Survey_FieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Survey_Fields and returns the data updated in the database.
     * @param {Survey_FieldUpdateManyAndReturnArgs} args - Arguments to update many Survey_Fields.
     * @example
     * // Update many Survey_Fields
     * const survey_Field = await prisma.survey_Field.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Survey_Fields and only return the `id`
     * const survey_FieldWithIdOnly = await prisma.survey_Field.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Survey_FieldUpdateManyAndReturnArgs>(args: SelectSubset<T, Survey_FieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Survey_Field.
     * @param {Survey_FieldUpsertArgs} args - Arguments to update or create a Survey_Field.
     * @example
     * // Update or create a Survey_Field
     * const survey_Field = await prisma.survey_Field.upsert({
     *   create: {
     *     // ... data to create a Survey_Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey_Field we want to update
     *   }
     * })
     */
    upsert<T extends Survey_FieldUpsertArgs>(args: SelectSubset<T, Survey_FieldUpsertArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Survey_Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldCountArgs} args - Arguments to filter Survey_Fields to count.
     * @example
     * // Count the number of Survey_Fields
     * const count = await prisma.survey_Field.count({
     *   where: {
     *     // ... the filter for the Survey_Fields we want to count
     *   }
     * })
    **/
    count<T extends Survey_FieldCountArgs>(
      args?: Subset<T, Survey_FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Survey_FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey_Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Survey_FieldAggregateArgs>(args: Subset<T, Survey_FieldAggregateArgs>): Prisma.PrismaPromise<GetSurvey_FieldAggregateType<T>>

    /**
     * Group by Survey_Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Survey_FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Survey_FieldGroupByArgs['orderBy'] }
        : { orderBy?: Survey_FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Survey_FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurvey_FieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey_Field model
   */
  readonly fields: Survey_FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey_Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Survey_FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    survey<T extends SurveyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveyDefaultArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Survey_Response_Field<T extends Survey_Field$Survey_Response_FieldArgs<ExtArgs> = {}>(args?: Subset<T, Survey_Field$Survey_Response_FieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey_Field model
   */
  interface Survey_FieldFieldRefs {
    readonly id: FieldRef<"Survey_Field", 'String'>
    readonly surveyID: FieldRef<"Survey_Field", 'String'>
    readonly field: FieldRef<"Survey_Field", 'String'>
    readonly type: FieldRef<"Survey_Field", 'String'>
    readonly options: FieldRef<"Survey_Field", 'String'>
    readonly required: FieldRef<"Survey_Field", 'Boolean'>
    readonly createdAt: FieldRef<"Survey_Field", 'DateTime'>
    readonly updatedAt: FieldRef<"Survey_Field", 'DateTime'>
    readonly deletedAt: FieldRef<"Survey_Field", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey_Field findUnique
   */
  export type Survey_FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Field to fetch.
     */
    where: Survey_FieldWhereUniqueInput
  }

  /**
   * Survey_Field findUniqueOrThrow
   */
  export type Survey_FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Field to fetch.
     */
    where: Survey_FieldWhereUniqueInput
  }

  /**
   * Survey_Field findFirst
   */
  export type Survey_FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Field to fetch.
     */
    where?: Survey_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Fields to fetch.
     */
    orderBy?: Survey_FieldOrderByWithRelationInput | Survey_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Survey_Fields.
     */
    cursor?: Survey_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Survey_Fields.
     */
    distinct?: Survey_FieldScalarFieldEnum | Survey_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Field findFirstOrThrow
   */
  export type Survey_FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Field to fetch.
     */
    where?: Survey_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Fields to fetch.
     */
    orderBy?: Survey_FieldOrderByWithRelationInput | Survey_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Survey_Fields.
     */
    cursor?: Survey_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Survey_Fields.
     */
    distinct?: Survey_FieldScalarFieldEnum | Survey_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Field findMany
   */
  export type Survey_FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Fields to fetch.
     */
    where?: Survey_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Fields to fetch.
     */
    orderBy?: Survey_FieldOrderByWithRelationInput | Survey_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Survey_Fields.
     */
    cursor?: Survey_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Fields.
     */
    skip?: number
    distinct?: Survey_FieldScalarFieldEnum | Survey_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Field create
   */
  export type Survey_FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey_Field.
     */
    data: XOR<Survey_FieldCreateInput, Survey_FieldUncheckedCreateInput>
  }

  /**
   * Survey_Field createMany
   */
  export type Survey_FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Survey_Fields.
     */
    data: Survey_FieldCreateManyInput | Survey_FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey_Field createManyAndReturn
   */
  export type Survey_FieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * The data used to create many Survey_Fields.
     */
    data: Survey_FieldCreateManyInput | Survey_FieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey_Field update
   */
  export type Survey_FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey_Field.
     */
    data: XOR<Survey_FieldUpdateInput, Survey_FieldUncheckedUpdateInput>
    /**
     * Choose, which Survey_Field to update.
     */
    where: Survey_FieldWhereUniqueInput
  }

  /**
   * Survey_Field updateMany
   */
  export type Survey_FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Survey_Fields.
     */
    data: XOR<Survey_FieldUpdateManyMutationInput, Survey_FieldUncheckedUpdateManyInput>
    /**
     * Filter which Survey_Fields to update
     */
    where?: Survey_FieldWhereInput
    /**
     * Limit how many Survey_Fields to update.
     */
    limit?: number
  }

  /**
   * Survey_Field updateManyAndReturn
   */
  export type Survey_FieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * The data used to update Survey_Fields.
     */
    data: XOR<Survey_FieldUpdateManyMutationInput, Survey_FieldUncheckedUpdateManyInput>
    /**
     * Filter which Survey_Fields to update
     */
    where?: Survey_FieldWhereInput
    /**
     * Limit how many Survey_Fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey_Field upsert
   */
  export type Survey_FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey_Field to update in case it exists.
     */
    where: Survey_FieldWhereUniqueInput
    /**
     * In case the Survey_Field found by the `where` argument doesn't exist, create a new Survey_Field with this data.
     */
    create: XOR<Survey_FieldCreateInput, Survey_FieldUncheckedCreateInput>
    /**
     * In case the Survey_Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Survey_FieldUpdateInput, Survey_FieldUncheckedUpdateInput>
  }

  /**
   * Survey_Field delete
   */
  export type Survey_FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
    /**
     * Filter which Survey_Field to delete.
     */
    where: Survey_FieldWhereUniqueInput
  }

  /**
   * Survey_Field deleteMany
   */
  export type Survey_FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey_Fields to delete
     */
    where?: Survey_FieldWhereInput
    /**
     * Limit how many Survey_Fields to delete.
     */
    limit?: number
  }

  /**
   * Survey_Field.Survey_Response_Field
   */
  export type Survey_Field$Survey_Response_FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    where?: Survey_Response_FieldWhereInput
    orderBy?: Survey_Response_FieldOrderByWithRelationInput | Survey_Response_FieldOrderByWithRelationInput[]
    cursor?: Survey_Response_FieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Survey_Response_FieldScalarFieldEnum | Survey_Response_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Field without action
   */
  export type Survey_FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Field
     */
    select?: Survey_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Field
     */
    omit?: Survey_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_FieldInclude<ExtArgs> | null
  }


  /**
   * Model Survey_Response
   */

  export type AggregateSurvey_Response = {
    _count: Survey_ResponseCountAggregateOutputType | null
    _min: Survey_ResponseMinAggregateOutputType | null
    _max: Survey_ResponseMaxAggregateOutputType | null
  }

  export type Survey_ResponseMinAggregateOutputType = {
    id: string | null
    surveyID: string | null
    userID: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Survey_ResponseMaxAggregateOutputType = {
    id: string | null
    surveyID: string | null
    userID: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Survey_ResponseCountAggregateOutputType = {
    id: number
    surveyID: number
    userID: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Survey_ResponseMinAggregateInputType = {
    id?: true
    surveyID?: true
    userID?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Survey_ResponseMaxAggregateInputType = {
    id?: true
    surveyID?: true
    userID?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Survey_ResponseCountAggregateInputType = {
    id?: true
    surveyID?: true
    userID?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Survey_ResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey_Response to aggregate.
     */
    where?: Survey_ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Responses to fetch.
     */
    orderBy?: Survey_ResponseOrderByWithRelationInput | Survey_ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Survey_ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Survey_Responses
    **/
    _count?: true | Survey_ResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Survey_ResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Survey_ResponseMaxAggregateInputType
  }

  export type GetSurvey_ResponseAggregateType<T extends Survey_ResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey_Response]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey_Response[P]>
      : GetScalarType<T[P], AggregateSurvey_Response[P]>
  }




  export type Survey_ResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_ResponseWhereInput
    orderBy?: Survey_ResponseOrderByWithAggregationInput | Survey_ResponseOrderByWithAggregationInput[]
    by: Survey_ResponseScalarFieldEnum[] | Survey_ResponseScalarFieldEnum
    having?: Survey_ResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Survey_ResponseCountAggregateInputType | true
    _min?: Survey_ResponseMinAggregateInputType
    _max?: Survey_ResponseMaxAggregateInputType
  }

  export type Survey_ResponseGroupByOutputType = {
    id: string
    surveyID: string
    userID: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Survey_ResponseCountAggregateOutputType | null
    _min: Survey_ResponseMinAggregateOutputType | null
    _max: Survey_ResponseMaxAggregateOutputType | null
  }

  type GetSurvey_ResponseGroupByPayload<T extends Survey_ResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Survey_ResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Survey_ResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Survey_ResponseGroupByOutputType[P]>
            : GetScalarType<T[P], Survey_ResponseGroupByOutputType[P]>
        }
      >
    >


  export type Survey_ResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyID?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    user?: boolean | Survey_Response$userArgs<ExtArgs>
    Survey_Response_Field?: boolean | Survey_Response$Survey_Response_FieldArgs<ExtArgs>
    _count?: boolean | Survey_ResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Response"]>

  export type Survey_ResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyID?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    user?: boolean | Survey_Response$userArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Response"]>

  export type Survey_ResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    surveyID?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    user?: boolean | Survey_Response$userArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Response"]>

  export type Survey_ResponseSelectScalar = {
    id?: boolean
    surveyID?: boolean
    userID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Survey_ResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "surveyID" | "userID" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["survey_Response"]>
  export type Survey_ResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    user?: boolean | Survey_Response$userArgs<ExtArgs>
    Survey_Response_Field?: boolean | Survey_Response$Survey_Response_FieldArgs<ExtArgs>
    _count?: boolean | Survey_ResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Survey_ResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    user?: boolean | Survey_Response$userArgs<ExtArgs>
  }
  export type Survey_ResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    survey?: boolean | SurveyDefaultArgs<ExtArgs>
    user?: boolean | Survey_Response$userArgs<ExtArgs>
  }

  export type $Survey_ResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey_Response"
    objects: {
      survey: Prisma.$SurveyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      Survey_Response_Field: Prisma.$Survey_Response_FieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      surveyID: string
      userID: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["survey_Response"]>
    composites: {}
  }

  type Survey_ResponseGetPayload<S extends boolean | null | undefined | Survey_ResponseDefaultArgs> = $Result.GetResult<Prisma.$Survey_ResponsePayload, S>

  type Survey_ResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Survey_ResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Survey_ResponseCountAggregateInputType | true
    }

  export interface Survey_ResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey_Response'], meta: { name: 'Survey_Response' } }
    /**
     * Find zero or one Survey_Response that matches the filter.
     * @param {Survey_ResponseFindUniqueArgs} args - Arguments to find a Survey_Response
     * @example
     * // Get one Survey_Response
     * const survey_Response = await prisma.survey_Response.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Survey_ResponseFindUniqueArgs>(args: SelectSubset<T, Survey_ResponseFindUniqueArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Survey_Response that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Survey_ResponseFindUniqueOrThrowArgs} args - Arguments to find a Survey_Response
     * @example
     * // Get one Survey_Response
     * const survey_Response = await prisma.survey_Response.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Survey_ResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, Survey_ResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey_Response that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseFindFirstArgs} args - Arguments to find a Survey_Response
     * @example
     * // Get one Survey_Response
     * const survey_Response = await prisma.survey_Response.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Survey_ResponseFindFirstArgs>(args?: SelectSubset<T, Survey_ResponseFindFirstArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey_Response that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseFindFirstOrThrowArgs} args - Arguments to find a Survey_Response
     * @example
     * // Get one Survey_Response
     * const survey_Response = await prisma.survey_Response.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Survey_ResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, Survey_ResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Survey_Responses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Survey_Responses
     * const survey_Responses = await prisma.survey_Response.findMany()
     * 
     * // Get first 10 Survey_Responses
     * const survey_Responses = await prisma.survey_Response.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const survey_ResponseWithIdOnly = await prisma.survey_Response.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Survey_ResponseFindManyArgs>(args?: SelectSubset<T, Survey_ResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Survey_Response.
     * @param {Survey_ResponseCreateArgs} args - Arguments to create a Survey_Response.
     * @example
     * // Create one Survey_Response
     * const Survey_Response = await prisma.survey_Response.create({
     *   data: {
     *     // ... data to create a Survey_Response
     *   }
     * })
     * 
     */
    create<T extends Survey_ResponseCreateArgs>(args: SelectSubset<T, Survey_ResponseCreateArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Survey_Responses.
     * @param {Survey_ResponseCreateManyArgs} args - Arguments to create many Survey_Responses.
     * @example
     * // Create many Survey_Responses
     * const survey_Response = await prisma.survey_Response.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Survey_ResponseCreateManyArgs>(args?: SelectSubset<T, Survey_ResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Survey_Responses and returns the data saved in the database.
     * @param {Survey_ResponseCreateManyAndReturnArgs} args - Arguments to create many Survey_Responses.
     * @example
     * // Create many Survey_Responses
     * const survey_Response = await prisma.survey_Response.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Survey_Responses and only return the `id`
     * const survey_ResponseWithIdOnly = await prisma.survey_Response.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Survey_ResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, Survey_ResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Survey_Response.
     * @param {Survey_ResponseDeleteArgs} args - Arguments to delete one Survey_Response.
     * @example
     * // Delete one Survey_Response
     * const Survey_Response = await prisma.survey_Response.delete({
     *   where: {
     *     // ... filter to delete one Survey_Response
     *   }
     * })
     * 
     */
    delete<T extends Survey_ResponseDeleteArgs>(args: SelectSubset<T, Survey_ResponseDeleteArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Survey_Response.
     * @param {Survey_ResponseUpdateArgs} args - Arguments to update one Survey_Response.
     * @example
     * // Update one Survey_Response
     * const survey_Response = await prisma.survey_Response.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Survey_ResponseUpdateArgs>(args: SelectSubset<T, Survey_ResponseUpdateArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Survey_Responses.
     * @param {Survey_ResponseDeleteManyArgs} args - Arguments to filter Survey_Responses to delete.
     * @example
     * // Delete a few Survey_Responses
     * const { count } = await prisma.survey_Response.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Survey_ResponseDeleteManyArgs>(args?: SelectSubset<T, Survey_ResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Survey_Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Survey_Responses
     * const survey_Response = await prisma.survey_Response.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Survey_ResponseUpdateManyArgs>(args: SelectSubset<T, Survey_ResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Survey_Responses and returns the data updated in the database.
     * @param {Survey_ResponseUpdateManyAndReturnArgs} args - Arguments to update many Survey_Responses.
     * @example
     * // Update many Survey_Responses
     * const survey_Response = await prisma.survey_Response.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Survey_Responses and only return the `id`
     * const survey_ResponseWithIdOnly = await prisma.survey_Response.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Survey_ResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, Survey_ResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Survey_Response.
     * @param {Survey_ResponseUpsertArgs} args - Arguments to update or create a Survey_Response.
     * @example
     * // Update or create a Survey_Response
     * const survey_Response = await prisma.survey_Response.upsert({
     *   create: {
     *     // ... data to create a Survey_Response
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey_Response we want to update
     *   }
     * })
     */
    upsert<T extends Survey_ResponseUpsertArgs>(args: SelectSubset<T, Survey_ResponseUpsertArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Survey_Responses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseCountArgs} args - Arguments to filter Survey_Responses to count.
     * @example
     * // Count the number of Survey_Responses
     * const count = await prisma.survey_Response.count({
     *   where: {
     *     // ... the filter for the Survey_Responses we want to count
     *   }
     * })
    **/
    count<T extends Survey_ResponseCountArgs>(
      args?: Subset<T, Survey_ResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Survey_ResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey_Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Survey_ResponseAggregateArgs>(args: Subset<T, Survey_ResponseAggregateArgs>): Prisma.PrismaPromise<GetSurvey_ResponseAggregateType<T>>

    /**
     * Group by Survey_Response.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_ResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Survey_ResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Survey_ResponseGroupByArgs['orderBy'] }
        : { orderBy?: Survey_ResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Survey_ResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurvey_ResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey_Response model
   */
  readonly fields: Survey_ResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey_Response.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Survey_ResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    survey<T extends SurveyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SurveyDefaultArgs<ExtArgs>>): Prisma__SurveyClient<$Result.GetResult<Prisma.$SurveyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Survey_Response$userArgs<ExtArgs> = {}>(args?: Subset<T, Survey_Response$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Survey_Response_Field<T extends Survey_Response$Survey_Response_FieldArgs<ExtArgs> = {}>(args?: Subset<T, Survey_Response$Survey_Response_FieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey_Response model
   */
  interface Survey_ResponseFieldRefs {
    readonly id: FieldRef<"Survey_Response", 'String'>
    readonly surveyID: FieldRef<"Survey_Response", 'String'>
    readonly userID: FieldRef<"Survey_Response", 'String'>
    readonly createdAt: FieldRef<"Survey_Response", 'DateTime'>
    readonly updatedAt: FieldRef<"Survey_Response", 'DateTime'>
    readonly deletedAt: FieldRef<"Survey_Response", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey_Response findUnique
   */
  export type Survey_ResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response to fetch.
     */
    where: Survey_ResponseWhereUniqueInput
  }

  /**
   * Survey_Response findUniqueOrThrow
   */
  export type Survey_ResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response to fetch.
     */
    where: Survey_ResponseWhereUniqueInput
  }

  /**
   * Survey_Response findFirst
   */
  export type Survey_ResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response to fetch.
     */
    where?: Survey_ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Responses to fetch.
     */
    orderBy?: Survey_ResponseOrderByWithRelationInput | Survey_ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Survey_Responses.
     */
    cursor?: Survey_ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Survey_Responses.
     */
    distinct?: Survey_ResponseScalarFieldEnum | Survey_ResponseScalarFieldEnum[]
  }

  /**
   * Survey_Response findFirstOrThrow
   */
  export type Survey_ResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response to fetch.
     */
    where?: Survey_ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Responses to fetch.
     */
    orderBy?: Survey_ResponseOrderByWithRelationInput | Survey_ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Survey_Responses.
     */
    cursor?: Survey_ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Responses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Survey_Responses.
     */
    distinct?: Survey_ResponseScalarFieldEnum | Survey_ResponseScalarFieldEnum[]
  }

  /**
   * Survey_Response findMany
   */
  export type Survey_ResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Responses to fetch.
     */
    where?: Survey_ResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Responses to fetch.
     */
    orderBy?: Survey_ResponseOrderByWithRelationInput | Survey_ResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Survey_Responses.
     */
    cursor?: Survey_ResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Responses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Responses.
     */
    skip?: number
    distinct?: Survey_ResponseScalarFieldEnum | Survey_ResponseScalarFieldEnum[]
  }

  /**
   * Survey_Response create
   */
  export type Survey_ResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey_Response.
     */
    data: XOR<Survey_ResponseCreateInput, Survey_ResponseUncheckedCreateInput>
  }

  /**
   * Survey_Response createMany
   */
  export type Survey_ResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Survey_Responses.
     */
    data: Survey_ResponseCreateManyInput | Survey_ResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey_Response createManyAndReturn
   */
  export type Survey_ResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * The data used to create many Survey_Responses.
     */
    data: Survey_ResponseCreateManyInput | Survey_ResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey_Response update
   */
  export type Survey_ResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey_Response.
     */
    data: XOR<Survey_ResponseUpdateInput, Survey_ResponseUncheckedUpdateInput>
    /**
     * Choose, which Survey_Response to update.
     */
    where: Survey_ResponseWhereUniqueInput
  }

  /**
   * Survey_Response updateMany
   */
  export type Survey_ResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Survey_Responses.
     */
    data: XOR<Survey_ResponseUpdateManyMutationInput, Survey_ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Survey_Responses to update
     */
    where?: Survey_ResponseWhereInput
    /**
     * Limit how many Survey_Responses to update.
     */
    limit?: number
  }

  /**
   * Survey_Response updateManyAndReturn
   */
  export type Survey_ResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * The data used to update Survey_Responses.
     */
    data: XOR<Survey_ResponseUpdateManyMutationInput, Survey_ResponseUncheckedUpdateManyInput>
    /**
     * Filter which Survey_Responses to update
     */
    where?: Survey_ResponseWhereInput
    /**
     * Limit how many Survey_Responses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey_Response upsert
   */
  export type Survey_ResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey_Response to update in case it exists.
     */
    where: Survey_ResponseWhereUniqueInput
    /**
     * In case the Survey_Response found by the `where` argument doesn't exist, create a new Survey_Response with this data.
     */
    create: XOR<Survey_ResponseCreateInput, Survey_ResponseUncheckedCreateInput>
    /**
     * In case the Survey_Response was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Survey_ResponseUpdateInput, Survey_ResponseUncheckedUpdateInput>
  }

  /**
   * Survey_Response delete
   */
  export type Survey_ResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
    /**
     * Filter which Survey_Response to delete.
     */
    where: Survey_ResponseWhereUniqueInput
  }

  /**
   * Survey_Response deleteMany
   */
  export type Survey_ResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey_Responses to delete
     */
    where?: Survey_ResponseWhereInput
    /**
     * Limit how many Survey_Responses to delete.
     */
    limit?: number
  }

  /**
   * Survey_Response.user
   */
  export type Survey_Response$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Survey_Response.Survey_Response_Field
   */
  export type Survey_Response$Survey_Response_FieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    where?: Survey_Response_FieldWhereInput
    orderBy?: Survey_Response_FieldOrderByWithRelationInput | Survey_Response_FieldOrderByWithRelationInput[]
    cursor?: Survey_Response_FieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Survey_Response_FieldScalarFieldEnum | Survey_Response_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Response without action
   */
  export type Survey_ResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response
     */
    select?: Survey_ResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response
     */
    omit?: Survey_ResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_ResponseInclude<ExtArgs> | null
  }


  /**
   * Model Survey_Response_Field
   */

  export type AggregateSurvey_Response_Field = {
    _count: Survey_Response_FieldCountAggregateOutputType | null
    _min: Survey_Response_FieldMinAggregateOutputType | null
    _max: Survey_Response_FieldMaxAggregateOutputType | null
  }

  export type Survey_Response_FieldMinAggregateOutputType = {
    id: string | null
    responseID: string | null
    fieldID: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Survey_Response_FieldMaxAggregateOutputType = {
    id: string | null
    responseID: string | null
    fieldID: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Survey_Response_FieldCountAggregateOutputType = {
    id: number
    responseID: number
    fieldID: number
    value: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Survey_Response_FieldMinAggregateInputType = {
    id?: true
    responseID?: true
    fieldID?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Survey_Response_FieldMaxAggregateInputType = {
    id?: true
    responseID?: true
    fieldID?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Survey_Response_FieldCountAggregateInputType = {
    id?: true
    responseID?: true
    fieldID?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Survey_Response_FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey_Response_Field to aggregate.
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Response_Fields to fetch.
     */
    orderBy?: Survey_Response_FieldOrderByWithRelationInput | Survey_Response_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Survey_Response_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Response_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Response_Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Survey_Response_Fields
    **/
    _count?: true | Survey_Response_FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Survey_Response_FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Survey_Response_FieldMaxAggregateInputType
  }

  export type GetSurvey_Response_FieldAggregateType<T extends Survey_Response_FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvey_Response_Field]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvey_Response_Field[P]>
      : GetScalarType<T[P], AggregateSurvey_Response_Field[P]>
  }




  export type Survey_Response_FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Survey_Response_FieldWhereInput
    orderBy?: Survey_Response_FieldOrderByWithAggregationInput | Survey_Response_FieldOrderByWithAggregationInput[]
    by: Survey_Response_FieldScalarFieldEnum[] | Survey_Response_FieldScalarFieldEnum
    having?: Survey_Response_FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Survey_Response_FieldCountAggregateInputType | true
    _min?: Survey_Response_FieldMinAggregateInputType
    _max?: Survey_Response_FieldMaxAggregateInputType
  }

  export type Survey_Response_FieldGroupByOutputType = {
    id: string
    responseID: string
    fieldID: string
    value: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Survey_Response_FieldCountAggregateOutputType | null
    _min: Survey_Response_FieldMinAggregateOutputType | null
    _max: Survey_Response_FieldMaxAggregateOutputType | null
  }

  type GetSurvey_Response_FieldGroupByPayload<T extends Survey_Response_FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Survey_Response_FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Survey_Response_FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Survey_Response_FieldGroupByOutputType[P]>
            : GetScalarType<T[P], Survey_Response_FieldGroupByOutputType[P]>
        }
      >
    >


  export type Survey_Response_FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseID?: boolean
    fieldID?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    response?: boolean | Survey_ResponseDefaultArgs<ExtArgs>
    field?: boolean | Survey_FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Response_Field"]>

  export type Survey_Response_FieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseID?: boolean
    fieldID?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    response?: boolean | Survey_ResponseDefaultArgs<ExtArgs>
    field?: boolean | Survey_FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Response_Field"]>

  export type Survey_Response_FieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseID?: boolean
    fieldID?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    response?: boolean | Survey_ResponseDefaultArgs<ExtArgs>
    field?: boolean | Survey_FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survey_Response_Field"]>

  export type Survey_Response_FieldSelectScalar = {
    id?: boolean
    responseID?: boolean
    fieldID?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Survey_Response_FieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "responseID" | "fieldID" | "value" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["survey_Response_Field"]>
  export type Survey_Response_FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | Survey_ResponseDefaultArgs<ExtArgs>
    field?: boolean | Survey_FieldDefaultArgs<ExtArgs>
  }
  export type Survey_Response_FieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | Survey_ResponseDefaultArgs<ExtArgs>
    field?: boolean | Survey_FieldDefaultArgs<ExtArgs>
  }
  export type Survey_Response_FieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | Survey_ResponseDefaultArgs<ExtArgs>
    field?: boolean | Survey_FieldDefaultArgs<ExtArgs>
  }

  export type $Survey_Response_FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Survey_Response_Field"
    objects: {
      response: Prisma.$Survey_ResponsePayload<ExtArgs>
      field: Prisma.$Survey_FieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responseID: string
      fieldID: string
      value: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["survey_Response_Field"]>
    composites: {}
  }

  type Survey_Response_FieldGetPayload<S extends boolean | null | undefined | Survey_Response_FieldDefaultArgs> = $Result.GetResult<Prisma.$Survey_Response_FieldPayload, S>

  type Survey_Response_FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Survey_Response_FieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Survey_Response_FieldCountAggregateInputType | true
    }

  export interface Survey_Response_FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Survey_Response_Field'], meta: { name: 'Survey_Response_Field' } }
    /**
     * Find zero or one Survey_Response_Field that matches the filter.
     * @param {Survey_Response_FieldFindUniqueArgs} args - Arguments to find a Survey_Response_Field
     * @example
     * // Get one Survey_Response_Field
     * const survey_Response_Field = await prisma.survey_Response_Field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Survey_Response_FieldFindUniqueArgs>(args: SelectSubset<T, Survey_Response_FieldFindUniqueArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Survey_Response_Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Survey_Response_FieldFindUniqueOrThrowArgs} args - Arguments to find a Survey_Response_Field
     * @example
     * // Get one Survey_Response_Field
     * const survey_Response_Field = await prisma.survey_Response_Field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Survey_Response_FieldFindUniqueOrThrowArgs>(args: SelectSubset<T, Survey_Response_FieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey_Response_Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldFindFirstArgs} args - Arguments to find a Survey_Response_Field
     * @example
     * // Get one Survey_Response_Field
     * const survey_Response_Field = await prisma.survey_Response_Field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Survey_Response_FieldFindFirstArgs>(args?: SelectSubset<T, Survey_Response_FieldFindFirstArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survey_Response_Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldFindFirstOrThrowArgs} args - Arguments to find a Survey_Response_Field
     * @example
     * // Get one Survey_Response_Field
     * const survey_Response_Field = await prisma.survey_Response_Field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Survey_Response_FieldFindFirstOrThrowArgs>(args?: SelectSubset<T, Survey_Response_FieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Survey_Response_Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Survey_Response_Fields
     * const survey_Response_Fields = await prisma.survey_Response_Field.findMany()
     * 
     * // Get first 10 Survey_Response_Fields
     * const survey_Response_Fields = await prisma.survey_Response_Field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const survey_Response_FieldWithIdOnly = await prisma.survey_Response_Field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Survey_Response_FieldFindManyArgs>(args?: SelectSubset<T, Survey_Response_FieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Survey_Response_Field.
     * @param {Survey_Response_FieldCreateArgs} args - Arguments to create a Survey_Response_Field.
     * @example
     * // Create one Survey_Response_Field
     * const Survey_Response_Field = await prisma.survey_Response_Field.create({
     *   data: {
     *     // ... data to create a Survey_Response_Field
     *   }
     * })
     * 
     */
    create<T extends Survey_Response_FieldCreateArgs>(args: SelectSubset<T, Survey_Response_FieldCreateArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Survey_Response_Fields.
     * @param {Survey_Response_FieldCreateManyArgs} args - Arguments to create many Survey_Response_Fields.
     * @example
     * // Create many Survey_Response_Fields
     * const survey_Response_Field = await prisma.survey_Response_Field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Survey_Response_FieldCreateManyArgs>(args?: SelectSubset<T, Survey_Response_FieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Survey_Response_Fields and returns the data saved in the database.
     * @param {Survey_Response_FieldCreateManyAndReturnArgs} args - Arguments to create many Survey_Response_Fields.
     * @example
     * // Create many Survey_Response_Fields
     * const survey_Response_Field = await prisma.survey_Response_Field.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Survey_Response_Fields and only return the `id`
     * const survey_Response_FieldWithIdOnly = await prisma.survey_Response_Field.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Survey_Response_FieldCreateManyAndReturnArgs>(args?: SelectSubset<T, Survey_Response_FieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Survey_Response_Field.
     * @param {Survey_Response_FieldDeleteArgs} args - Arguments to delete one Survey_Response_Field.
     * @example
     * // Delete one Survey_Response_Field
     * const Survey_Response_Field = await prisma.survey_Response_Field.delete({
     *   where: {
     *     // ... filter to delete one Survey_Response_Field
     *   }
     * })
     * 
     */
    delete<T extends Survey_Response_FieldDeleteArgs>(args: SelectSubset<T, Survey_Response_FieldDeleteArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Survey_Response_Field.
     * @param {Survey_Response_FieldUpdateArgs} args - Arguments to update one Survey_Response_Field.
     * @example
     * // Update one Survey_Response_Field
     * const survey_Response_Field = await prisma.survey_Response_Field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Survey_Response_FieldUpdateArgs>(args: SelectSubset<T, Survey_Response_FieldUpdateArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Survey_Response_Fields.
     * @param {Survey_Response_FieldDeleteManyArgs} args - Arguments to filter Survey_Response_Fields to delete.
     * @example
     * // Delete a few Survey_Response_Fields
     * const { count } = await prisma.survey_Response_Field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Survey_Response_FieldDeleteManyArgs>(args?: SelectSubset<T, Survey_Response_FieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Survey_Response_Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Survey_Response_Fields
     * const survey_Response_Field = await prisma.survey_Response_Field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Survey_Response_FieldUpdateManyArgs>(args: SelectSubset<T, Survey_Response_FieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Survey_Response_Fields and returns the data updated in the database.
     * @param {Survey_Response_FieldUpdateManyAndReturnArgs} args - Arguments to update many Survey_Response_Fields.
     * @example
     * // Update many Survey_Response_Fields
     * const survey_Response_Field = await prisma.survey_Response_Field.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Survey_Response_Fields and only return the `id`
     * const survey_Response_FieldWithIdOnly = await prisma.survey_Response_Field.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Survey_Response_FieldUpdateManyAndReturnArgs>(args: SelectSubset<T, Survey_Response_FieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Survey_Response_Field.
     * @param {Survey_Response_FieldUpsertArgs} args - Arguments to update or create a Survey_Response_Field.
     * @example
     * // Update or create a Survey_Response_Field
     * const survey_Response_Field = await prisma.survey_Response_Field.upsert({
     *   create: {
     *     // ... data to create a Survey_Response_Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survey_Response_Field we want to update
     *   }
     * })
     */
    upsert<T extends Survey_Response_FieldUpsertArgs>(args: SelectSubset<T, Survey_Response_FieldUpsertArgs<ExtArgs>>): Prisma__Survey_Response_FieldClient<$Result.GetResult<Prisma.$Survey_Response_FieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Survey_Response_Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldCountArgs} args - Arguments to filter Survey_Response_Fields to count.
     * @example
     * // Count the number of Survey_Response_Fields
     * const count = await prisma.survey_Response_Field.count({
     *   where: {
     *     // ... the filter for the Survey_Response_Fields we want to count
     *   }
     * })
    **/
    count<T extends Survey_Response_FieldCountArgs>(
      args?: Subset<T, Survey_Response_FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Survey_Response_FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survey_Response_Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Survey_Response_FieldAggregateArgs>(args: Subset<T, Survey_Response_FieldAggregateArgs>): Prisma.PrismaPromise<GetSurvey_Response_FieldAggregateType<T>>

    /**
     * Group by Survey_Response_Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Survey_Response_FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Survey_Response_FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Survey_Response_FieldGroupByArgs['orderBy'] }
        : { orderBy?: Survey_Response_FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Survey_Response_FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurvey_Response_FieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Survey_Response_Field model
   */
  readonly fields: Survey_Response_FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Survey_Response_Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Survey_Response_FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    response<T extends Survey_ResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Survey_ResponseDefaultArgs<ExtArgs>>): Prisma__Survey_ResponseClient<$Result.GetResult<Prisma.$Survey_ResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends Survey_FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Survey_FieldDefaultArgs<ExtArgs>>): Prisma__Survey_FieldClient<$Result.GetResult<Prisma.$Survey_FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Survey_Response_Field model
   */
  interface Survey_Response_FieldFieldRefs {
    readonly id: FieldRef<"Survey_Response_Field", 'String'>
    readonly responseID: FieldRef<"Survey_Response_Field", 'String'>
    readonly fieldID: FieldRef<"Survey_Response_Field", 'String'>
    readonly value: FieldRef<"Survey_Response_Field", 'String'>
    readonly createdAt: FieldRef<"Survey_Response_Field", 'DateTime'>
    readonly updatedAt: FieldRef<"Survey_Response_Field", 'DateTime'>
    readonly deletedAt: FieldRef<"Survey_Response_Field", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Survey_Response_Field findUnique
   */
  export type Survey_Response_FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response_Field to fetch.
     */
    where: Survey_Response_FieldWhereUniqueInput
  }

  /**
   * Survey_Response_Field findUniqueOrThrow
   */
  export type Survey_Response_FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response_Field to fetch.
     */
    where: Survey_Response_FieldWhereUniqueInput
  }

  /**
   * Survey_Response_Field findFirst
   */
  export type Survey_Response_FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response_Field to fetch.
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Response_Fields to fetch.
     */
    orderBy?: Survey_Response_FieldOrderByWithRelationInput | Survey_Response_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Survey_Response_Fields.
     */
    cursor?: Survey_Response_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Response_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Response_Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Survey_Response_Fields.
     */
    distinct?: Survey_Response_FieldScalarFieldEnum | Survey_Response_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Response_Field findFirstOrThrow
   */
  export type Survey_Response_FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response_Field to fetch.
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Response_Fields to fetch.
     */
    orderBy?: Survey_Response_FieldOrderByWithRelationInput | Survey_Response_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Survey_Response_Fields.
     */
    cursor?: Survey_Response_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Response_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Response_Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Survey_Response_Fields.
     */
    distinct?: Survey_Response_FieldScalarFieldEnum | Survey_Response_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Response_Field findMany
   */
  export type Survey_Response_FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * Filter, which Survey_Response_Fields to fetch.
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Survey_Response_Fields to fetch.
     */
    orderBy?: Survey_Response_FieldOrderByWithRelationInput | Survey_Response_FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Survey_Response_Fields.
     */
    cursor?: Survey_Response_FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Survey_Response_Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Survey_Response_Fields.
     */
    skip?: number
    distinct?: Survey_Response_FieldScalarFieldEnum | Survey_Response_FieldScalarFieldEnum[]
  }

  /**
   * Survey_Response_Field create
   */
  export type Survey_Response_FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Survey_Response_Field.
     */
    data: XOR<Survey_Response_FieldCreateInput, Survey_Response_FieldUncheckedCreateInput>
  }

  /**
   * Survey_Response_Field createMany
   */
  export type Survey_Response_FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Survey_Response_Fields.
     */
    data: Survey_Response_FieldCreateManyInput | Survey_Response_FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Survey_Response_Field createManyAndReturn
   */
  export type Survey_Response_FieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * The data used to create many Survey_Response_Fields.
     */
    data: Survey_Response_FieldCreateManyInput | Survey_Response_FieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey_Response_Field update
   */
  export type Survey_Response_FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Survey_Response_Field.
     */
    data: XOR<Survey_Response_FieldUpdateInput, Survey_Response_FieldUncheckedUpdateInput>
    /**
     * Choose, which Survey_Response_Field to update.
     */
    where: Survey_Response_FieldWhereUniqueInput
  }

  /**
   * Survey_Response_Field updateMany
   */
  export type Survey_Response_FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Survey_Response_Fields.
     */
    data: XOR<Survey_Response_FieldUpdateManyMutationInput, Survey_Response_FieldUncheckedUpdateManyInput>
    /**
     * Filter which Survey_Response_Fields to update
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * Limit how many Survey_Response_Fields to update.
     */
    limit?: number
  }

  /**
   * Survey_Response_Field updateManyAndReturn
   */
  export type Survey_Response_FieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * The data used to update Survey_Response_Fields.
     */
    data: XOR<Survey_Response_FieldUpdateManyMutationInput, Survey_Response_FieldUncheckedUpdateManyInput>
    /**
     * Filter which Survey_Response_Fields to update
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * Limit how many Survey_Response_Fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Survey_Response_Field upsert
   */
  export type Survey_Response_FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Survey_Response_Field to update in case it exists.
     */
    where: Survey_Response_FieldWhereUniqueInput
    /**
     * In case the Survey_Response_Field found by the `where` argument doesn't exist, create a new Survey_Response_Field with this data.
     */
    create: XOR<Survey_Response_FieldCreateInput, Survey_Response_FieldUncheckedCreateInput>
    /**
     * In case the Survey_Response_Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Survey_Response_FieldUpdateInput, Survey_Response_FieldUncheckedUpdateInput>
  }

  /**
   * Survey_Response_Field delete
   */
  export type Survey_Response_FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
    /**
     * Filter which Survey_Response_Field to delete.
     */
    where: Survey_Response_FieldWhereUniqueInput
  }

  /**
   * Survey_Response_Field deleteMany
   */
  export type Survey_Response_FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Survey_Response_Fields to delete
     */
    where?: Survey_Response_FieldWhereInput
    /**
     * Limit how many Survey_Response_Fields to delete.
     */
    limit?: number
  }

  /**
   * Survey_Response_Field without action
   */
  export type Survey_Response_FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Survey_Response_Field
     */
    select?: Survey_Response_FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Survey_Response_Field
     */
    omit?: Survey_Response_FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Survey_Response_FieldInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    roleId: 'roleId',
    session_token: 'session_token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Data_PTScalarFieldEnum: {
    id: 'id',
    kode: 'kode',
    akreditasi: 'akreditasi',
    tanggal_berdiri: 'tanggal_berdiri',
    no_SK_pendirian: 'no_SK_pendirian',
    tanggal_SK_pendirian: 'tanggal_SK_pendirian',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Data_PTScalarFieldEnum = (typeof Data_PTScalarFieldEnum)[keyof typeof Data_PTScalarFieldEnum]


  export const SurveyScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SurveyScalarFieldEnum = (typeof SurveyScalarFieldEnum)[keyof typeof SurveyScalarFieldEnum]


  export const Survey_FieldScalarFieldEnum: {
    id: 'id',
    surveyID: 'surveyID',
    field: 'field',
    type: 'type',
    options: 'options',
    required: 'required',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Survey_FieldScalarFieldEnum = (typeof Survey_FieldScalarFieldEnum)[keyof typeof Survey_FieldScalarFieldEnum]


  export const Survey_ResponseScalarFieldEnum: {
    id: 'id',
    surveyID: 'surveyID',
    userID: 'userID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Survey_ResponseScalarFieldEnum = (typeof Survey_ResponseScalarFieldEnum)[keyof typeof Survey_ResponseScalarFieldEnum]


  export const Survey_Response_FieldScalarFieldEnum: {
    id: 'id',
    responseID: 'responseID',
    fieldID: 'fieldID',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Survey_Response_FieldScalarFieldEnum = (typeof Survey_Response_FieldScalarFieldEnum)[keyof typeof Survey_Response_FieldScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    User?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    User?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    session_token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    Survey?: SurveyListRelationFilter
    Survey_Response?: Survey_ResponseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    roleId?: SortOrder
    session_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    Survey?: SurveyOrderByRelationAggregateInput
    Survey_Response?: Survey_ResponseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    session_token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    Survey?: SurveyListRelationFilter
    Survey_Response?: Survey_ResponseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    roleId?: SortOrder
    session_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: StringWithAggregatesFilter<"User"> | string
    session_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type Data_PTWhereInput = {
    AND?: Data_PTWhereInput | Data_PTWhereInput[]
    OR?: Data_PTWhereInput[]
    NOT?: Data_PTWhereInput | Data_PTWhereInput[]
    id?: StringFilter<"Data_PT"> | string
    kode?: StringNullableFilter<"Data_PT"> | string | null
    akreditasi?: StringNullableFilter<"Data_PT"> | string | null
    tanggal_berdiri?: DateTimeNullableFilter<"Data_PT"> | Date | string | null
    no_SK_pendirian?: StringNullableFilter<"Data_PT"> | string | null
    tanggal_SK_pendirian?: StringNullableFilter<"Data_PT"> | string | null
    alamat?: StringNullableFilter<"Data_PT"> | string | null
    createdAt?: DateTimeFilter<"Data_PT"> | Date | string
    updatedAt?: DateTimeFilter<"Data_PT"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Data_PT"> | Date | string | null
  }

  export type Data_PTOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrderInput | SortOrder
    akreditasi?: SortOrderInput | SortOrder
    tanggal_berdiri?: SortOrderInput | SortOrder
    no_SK_pendirian?: SortOrderInput | SortOrder
    tanggal_SK_pendirian?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type Data_PTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Data_PTWhereInput | Data_PTWhereInput[]
    OR?: Data_PTWhereInput[]
    NOT?: Data_PTWhereInput | Data_PTWhereInput[]
    kode?: StringNullableFilter<"Data_PT"> | string | null
    akreditasi?: StringNullableFilter<"Data_PT"> | string | null
    tanggal_berdiri?: DateTimeNullableFilter<"Data_PT"> | Date | string | null
    no_SK_pendirian?: StringNullableFilter<"Data_PT"> | string | null
    tanggal_SK_pendirian?: StringNullableFilter<"Data_PT"> | string | null
    alamat?: StringNullableFilter<"Data_PT"> | string | null
    createdAt?: DateTimeFilter<"Data_PT"> | Date | string
    updatedAt?: DateTimeFilter<"Data_PT"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Data_PT"> | Date | string | null
  }, "id">

  export type Data_PTOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrderInput | SortOrder
    akreditasi?: SortOrderInput | SortOrder
    tanggal_berdiri?: SortOrderInput | SortOrder
    no_SK_pendirian?: SortOrderInput | SortOrder
    tanggal_SK_pendirian?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Data_PTCountOrderByAggregateInput
    _max?: Data_PTMaxOrderByAggregateInput
    _min?: Data_PTMinOrderByAggregateInput
  }

  export type Data_PTScalarWhereWithAggregatesInput = {
    AND?: Data_PTScalarWhereWithAggregatesInput | Data_PTScalarWhereWithAggregatesInput[]
    OR?: Data_PTScalarWhereWithAggregatesInput[]
    NOT?: Data_PTScalarWhereWithAggregatesInput | Data_PTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Data_PT"> | string
    kode?: StringNullableWithAggregatesFilter<"Data_PT"> | string | null
    akreditasi?: StringNullableWithAggregatesFilter<"Data_PT"> | string | null
    tanggal_berdiri?: DateTimeNullableWithAggregatesFilter<"Data_PT"> | Date | string | null
    no_SK_pendirian?: StringNullableWithAggregatesFilter<"Data_PT"> | string | null
    tanggal_SK_pendirian?: StringNullableWithAggregatesFilter<"Data_PT"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Data_PT"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Data_PT"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Data_PT"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Data_PT"> | Date | string | null
  }

  export type SurveyWhereInput = {
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    id?: StringFilter<"Survey"> | string
    userID?: StringFilter<"Survey"> | string
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Survey_Field?: Survey_FieldListRelationFilter
    Survey_Response?: Survey_ResponseListRelationFilter
  }

  export type SurveyOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    Survey_Field?: Survey_FieldOrderByRelationAggregateInput
    Survey_Response?: Survey_ResponseOrderByRelationAggregateInput
  }

  export type SurveyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SurveyWhereInput | SurveyWhereInput[]
    OR?: SurveyWhereInput[]
    NOT?: SurveyWhereInput | SurveyWhereInput[]
    userID?: StringFilter<"Survey"> | string
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Survey_Field?: Survey_FieldListRelationFilter
    Survey_Response?: Survey_ResponseListRelationFilter
  }, "id">

  export type SurveyOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SurveyCountOrderByAggregateInput
    _max?: SurveyMaxOrderByAggregateInput
    _min?: SurveyMinOrderByAggregateInput
  }

  export type SurveyScalarWhereWithAggregatesInput = {
    AND?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    OR?: SurveyScalarWhereWithAggregatesInput[]
    NOT?: SurveyScalarWhereWithAggregatesInput | SurveyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey"> | string
    userID?: StringWithAggregatesFilter<"Survey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Survey"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Survey"> | Date | string | null
  }

  export type Survey_FieldWhereInput = {
    AND?: Survey_FieldWhereInput | Survey_FieldWhereInput[]
    OR?: Survey_FieldWhereInput[]
    NOT?: Survey_FieldWhereInput | Survey_FieldWhereInput[]
    id?: StringFilter<"Survey_Field"> | string
    surveyID?: StringFilter<"Survey_Field"> | string
    field?: StringNullableFilter<"Survey_Field"> | string | null
    type?: StringFilter<"Survey_Field"> | string
    options?: StringNullableFilter<"Survey_Field"> | string | null
    required?: BoolFilter<"Survey_Field"> | boolean
    createdAt?: DateTimeFilter<"Survey_Field"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Field"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Field"> | Date | string | null
    survey?: XOR<SurveyScalarRelationFilter, SurveyWhereInput>
    Survey_Response_Field?: Survey_Response_FieldListRelationFilter
  }

  export type Survey_FieldOrderByWithRelationInput = {
    id?: SortOrder
    surveyID?: SortOrder
    field?: SortOrderInput | SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    survey?: SurveyOrderByWithRelationInput
    Survey_Response_Field?: Survey_Response_FieldOrderByRelationAggregateInput
  }

  export type Survey_FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Survey_FieldWhereInput | Survey_FieldWhereInput[]
    OR?: Survey_FieldWhereInput[]
    NOT?: Survey_FieldWhereInput | Survey_FieldWhereInput[]
    surveyID?: StringFilter<"Survey_Field"> | string
    field?: StringNullableFilter<"Survey_Field"> | string | null
    type?: StringFilter<"Survey_Field"> | string
    options?: StringNullableFilter<"Survey_Field"> | string | null
    required?: BoolFilter<"Survey_Field"> | boolean
    createdAt?: DateTimeFilter<"Survey_Field"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Field"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Field"> | Date | string | null
    survey?: XOR<SurveyScalarRelationFilter, SurveyWhereInput>
    Survey_Response_Field?: Survey_Response_FieldListRelationFilter
  }, "id">

  export type Survey_FieldOrderByWithAggregationInput = {
    id?: SortOrder
    surveyID?: SortOrder
    field?: SortOrderInput | SortOrder
    type?: SortOrder
    options?: SortOrderInput | SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Survey_FieldCountOrderByAggregateInput
    _max?: Survey_FieldMaxOrderByAggregateInput
    _min?: Survey_FieldMinOrderByAggregateInput
  }

  export type Survey_FieldScalarWhereWithAggregatesInput = {
    AND?: Survey_FieldScalarWhereWithAggregatesInput | Survey_FieldScalarWhereWithAggregatesInput[]
    OR?: Survey_FieldScalarWhereWithAggregatesInput[]
    NOT?: Survey_FieldScalarWhereWithAggregatesInput | Survey_FieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey_Field"> | string
    surveyID?: StringWithAggregatesFilter<"Survey_Field"> | string
    field?: StringNullableWithAggregatesFilter<"Survey_Field"> | string | null
    type?: StringWithAggregatesFilter<"Survey_Field"> | string
    options?: StringNullableWithAggregatesFilter<"Survey_Field"> | string | null
    required?: BoolWithAggregatesFilter<"Survey_Field"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Survey_Field"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Survey_Field"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Survey_Field"> | Date | string | null
  }

  export type Survey_ResponseWhereInput = {
    AND?: Survey_ResponseWhereInput | Survey_ResponseWhereInput[]
    OR?: Survey_ResponseWhereInput[]
    NOT?: Survey_ResponseWhereInput | Survey_ResponseWhereInput[]
    id?: StringFilter<"Survey_Response"> | string
    surveyID?: StringFilter<"Survey_Response"> | string
    userID?: StringNullableFilter<"Survey_Response"> | string | null
    createdAt?: DateTimeFilter<"Survey_Response"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Response"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Response"> | Date | string | null
    survey?: XOR<SurveyScalarRelationFilter, SurveyWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Survey_Response_Field?: Survey_Response_FieldListRelationFilter
  }

  export type Survey_ResponseOrderByWithRelationInput = {
    id?: SortOrder
    surveyID?: SortOrder
    userID?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    survey?: SurveyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Survey_Response_Field?: Survey_Response_FieldOrderByRelationAggregateInput
  }

  export type Survey_ResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Survey_ResponseWhereInput | Survey_ResponseWhereInput[]
    OR?: Survey_ResponseWhereInput[]
    NOT?: Survey_ResponseWhereInput | Survey_ResponseWhereInput[]
    surveyID?: StringFilter<"Survey_Response"> | string
    userID?: StringNullableFilter<"Survey_Response"> | string | null
    createdAt?: DateTimeFilter<"Survey_Response"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Response"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Response"> | Date | string | null
    survey?: XOR<SurveyScalarRelationFilter, SurveyWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Survey_Response_Field?: Survey_Response_FieldListRelationFilter
  }, "id">

  export type Survey_ResponseOrderByWithAggregationInput = {
    id?: SortOrder
    surveyID?: SortOrder
    userID?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Survey_ResponseCountOrderByAggregateInput
    _max?: Survey_ResponseMaxOrderByAggregateInput
    _min?: Survey_ResponseMinOrderByAggregateInput
  }

  export type Survey_ResponseScalarWhereWithAggregatesInput = {
    AND?: Survey_ResponseScalarWhereWithAggregatesInput | Survey_ResponseScalarWhereWithAggregatesInput[]
    OR?: Survey_ResponseScalarWhereWithAggregatesInput[]
    NOT?: Survey_ResponseScalarWhereWithAggregatesInput | Survey_ResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey_Response"> | string
    surveyID?: StringWithAggregatesFilter<"Survey_Response"> | string
    userID?: StringNullableWithAggregatesFilter<"Survey_Response"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Survey_Response"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Survey_Response"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Survey_Response"> | Date | string | null
  }

  export type Survey_Response_FieldWhereInput = {
    AND?: Survey_Response_FieldWhereInput | Survey_Response_FieldWhereInput[]
    OR?: Survey_Response_FieldWhereInput[]
    NOT?: Survey_Response_FieldWhereInput | Survey_Response_FieldWhereInput[]
    id?: StringFilter<"Survey_Response_Field"> | string
    responseID?: StringFilter<"Survey_Response_Field"> | string
    fieldID?: StringFilter<"Survey_Response_Field"> | string
    value?: StringNullableFilter<"Survey_Response_Field"> | string | null
    createdAt?: DateTimeFilter<"Survey_Response_Field"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Response_Field"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Response_Field"> | Date | string | null
    response?: XOR<Survey_ResponseScalarRelationFilter, Survey_ResponseWhereInput>
    field?: XOR<Survey_FieldScalarRelationFilter, Survey_FieldWhereInput>
  }

  export type Survey_Response_FieldOrderByWithRelationInput = {
    id?: SortOrder
    responseID?: SortOrder
    fieldID?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    response?: Survey_ResponseOrderByWithRelationInput
    field?: Survey_FieldOrderByWithRelationInput
  }

  export type Survey_Response_FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Survey_Response_FieldWhereInput | Survey_Response_FieldWhereInput[]
    OR?: Survey_Response_FieldWhereInput[]
    NOT?: Survey_Response_FieldWhereInput | Survey_Response_FieldWhereInput[]
    responseID?: StringFilter<"Survey_Response_Field"> | string
    fieldID?: StringFilter<"Survey_Response_Field"> | string
    value?: StringNullableFilter<"Survey_Response_Field"> | string | null
    createdAt?: DateTimeFilter<"Survey_Response_Field"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Response_Field"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Response_Field"> | Date | string | null
    response?: XOR<Survey_ResponseScalarRelationFilter, Survey_ResponseWhereInput>
    field?: XOR<Survey_FieldScalarRelationFilter, Survey_FieldWhereInput>
  }, "id">

  export type Survey_Response_FieldOrderByWithAggregationInput = {
    id?: SortOrder
    responseID?: SortOrder
    fieldID?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Survey_Response_FieldCountOrderByAggregateInput
    _max?: Survey_Response_FieldMaxOrderByAggregateInput
    _min?: Survey_Response_FieldMinOrderByAggregateInput
  }

  export type Survey_Response_FieldScalarWhereWithAggregatesInput = {
    AND?: Survey_Response_FieldScalarWhereWithAggregatesInput | Survey_Response_FieldScalarWhereWithAggregatesInput[]
    OR?: Survey_Response_FieldScalarWhereWithAggregatesInput[]
    NOT?: Survey_Response_FieldScalarWhereWithAggregatesInput | Survey_Response_FieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Survey_Response_Field"> | string
    responseID?: StringWithAggregatesFilter<"Survey_Response_Field"> | string
    fieldID?: StringWithAggregatesFilter<"Survey_Response_Field"> | string
    value?: StringNullableWithAggregatesFilter<"Survey_Response_Field"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Survey_Response_Field"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Survey_Response_Field"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Survey_Response_Field"> | Date | string | null
  }

  export type RoleCreateInput = {
    id?: string
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    Survey?: SurveyCreateNestedManyWithoutUserInput
    Survey_Response?: Survey_ResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    roleId: string
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey?: SurveyUncheckedCreateNestedManyWithoutUserInput
    Survey_Response?: Survey_ResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    Survey?: SurveyUpdateManyWithoutUserNestedInput
    Survey_Response?: Survey_ResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey?: SurveyUncheckedUpdateManyWithoutUserNestedInput
    Survey_Response?: Survey_ResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    roleId: string
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Data_PTCreateInput = {
    id?: string
    kode?: string | null
    akreditasi?: string | null
    tanggal_berdiri?: Date | string | null
    no_SK_pendirian?: string | null
    tanggal_SK_pendirian?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Data_PTUncheckedCreateInput = {
    id?: string
    kode?: string | null
    akreditasi?: string | null
    tanggal_berdiri?: Date | string | null
    no_SK_pendirian?: string | null
    tanggal_SK_pendirian?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Data_PTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: NullableStringFieldUpdateOperationsInput | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_berdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    no_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Data_PTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: NullableStringFieldUpdateOperationsInput | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_berdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    no_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Data_PTCreateManyInput = {
    id?: string
    kode?: string | null
    akreditasi?: string | null
    tanggal_berdiri?: Date | string | null
    no_SK_pendirian?: string | null
    tanggal_SK_pendirian?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Data_PTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: NullableStringFieldUpdateOperationsInput | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_berdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    no_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Data_PTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: NullableStringFieldUpdateOperationsInput | string | null
    akreditasi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_berdiri?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    no_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_SK_pendirian?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurveyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSurveyInput
    Survey_Field?: Survey_FieldCreateNestedManyWithoutSurveyInput
    Survey_Response?: Survey_ResponseCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateInput = {
    id?: string
    userID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Field?: Survey_FieldUncheckedCreateNestedManyWithoutSurveyInput
    Survey_Response?: Survey_ResponseUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSurveyNestedInput
    Survey_Field?: Survey_FieldUpdateManyWithoutSurveyNestedInput
    Survey_Response?: Survey_ResponseUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Field?: Survey_FieldUncheckedUpdateManyWithoutSurveyNestedInput
    Survey_Response?: Survey_ResponseUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyCreateManyInput = {
    id?: string
    userID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SurveyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurveyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_FieldCreateInput = {
    id?: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    survey: SurveyCreateNestedOneWithoutSurvey_FieldInput
    Survey_Response_Field?: Survey_Response_FieldCreateNestedManyWithoutFieldInput
  }

  export type Survey_FieldUncheckedCreateInput = {
    id?: string
    surveyID: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedCreateNestedManyWithoutFieldInput
  }

  export type Survey_FieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    survey?: SurveyUpdateOneRequiredWithoutSurvey_FieldNestedInput
    Survey_Response_Field?: Survey_Response_FieldUpdateManyWithoutFieldNestedInput
  }

  export type Survey_FieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type Survey_FieldCreateManyInput = {
    id?: string
    surveyID: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_FieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_FieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_ResponseCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    survey: SurveyCreateNestedOneWithoutSurvey_ResponseInput
    user?: UserCreateNestedOneWithoutSurvey_ResponseInput
    Survey_Response_Field?: Survey_Response_FieldCreateNestedManyWithoutResponseInput
  }

  export type Survey_ResponseUncheckedCreateInput = {
    id?: string
    surveyID: string
    userID?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedCreateNestedManyWithoutResponseInput
  }

  export type Survey_ResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    survey?: SurveyUpdateOneRequiredWithoutSurvey_ResponseNestedInput
    user?: UserUpdateOneWithoutSurvey_ResponseNestedInput
    Survey_Response_Field?: Survey_Response_FieldUpdateManyWithoutResponseNestedInput
  }

  export type Survey_ResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type Survey_ResponseCreateManyInput = {
    id?: string
    surveyID: string
    userID?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_ResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_ResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldCreateInput = {
    id?: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    response: Survey_ResponseCreateNestedOneWithoutSurvey_Response_FieldInput
    field: Survey_FieldCreateNestedOneWithoutSurvey_Response_FieldInput
  }

  export type Survey_Response_FieldUncheckedCreateInput = {
    id?: string
    responseID: string
    fieldID: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_Response_FieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: Survey_ResponseUpdateOneRequiredWithoutSurvey_Response_FieldNestedInput
    field?: Survey_FieldUpdateOneRequiredWithoutSurvey_Response_FieldNestedInput
  }

  export type Survey_Response_FieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseID?: StringFieldUpdateOperationsInput | string
    fieldID?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldCreateManyInput = {
    id?: string
    responseID: string
    fieldID: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_Response_FieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseID?: StringFieldUpdateOperationsInput | string
    fieldID?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SurveyListRelationFilter = {
    every?: SurveyWhereInput
    some?: SurveyWhereInput
    none?: SurveyWhereInput
  }

  export type Survey_ResponseListRelationFilter = {
    every?: Survey_ResponseWhereInput
    some?: Survey_ResponseWhereInput
    none?: Survey_ResponseWhereInput
  }

  export type SurveyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Survey_ResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    session_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    session_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    session_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Data_PTCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    akreditasi?: SortOrder
    tanggal_berdiri?: SortOrder
    no_SK_pendirian?: SortOrder
    tanggal_SK_pendirian?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Data_PTMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    akreditasi?: SortOrder
    tanggal_berdiri?: SortOrder
    no_SK_pendirian?: SortOrder
    tanggal_SK_pendirian?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Data_PTMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    akreditasi?: SortOrder
    tanggal_berdiri?: SortOrder
    no_SK_pendirian?: SortOrder
    tanggal_SK_pendirian?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Survey_FieldListRelationFilter = {
    every?: Survey_FieldWhereInput
    some?: Survey_FieldWhereInput
    none?: Survey_FieldWhereInput
  }

  export type Survey_FieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SurveyMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SurveyMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SurveyScalarRelationFilter = {
    is?: SurveyWhereInput
    isNot?: SurveyWhereInput
  }

  export type Survey_Response_FieldListRelationFilter = {
    every?: Survey_Response_FieldWhereInput
    some?: Survey_Response_FieldWhereInput
    none?: Survey_Response_FieldWhereInput
  }

  export type Survey_Response_FieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Survey_FieldCountOrderByAggregateInput = {
    id?: SortOrder
    surveyID?: SortOrder
    field?: SortOrder
    type?: SortOrder
    options?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    surveyID?: SortOrder
    field?: SortOrder
    type?: SortOrder
    options?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_FieldMinOrderByAggregateInput = {
    id?: SortOrder
    surveyID?: SortOrder
    field?: SortOrder
    type?: SortOrder
    options?: SortOrder
    required?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type Survey_ResponseCountOrderByAggregateInput = {
    id?: SortOrder
    surveyID?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_ResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    surveyID?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_ResponseMinOrderByAggregateInput = {
    id?: SortOrder
    surveyID?: SortOrder
    userID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_ResponseScalarRelationFilter = {
    is?: Survey_ResponseWhereInput
    isNot?: Survey_ResponseWhereInput
  }

  export type Survey_FieldScalarRelationFilter = {
    is?: Survey_FieldWhereInput
    isNot?: Survey_FieldWhereInput
  }

  export type Survey_Response_FieldCountOrderByAggregateInput = {
    id?: SortOrder
    responseID?: SortOrder
    fieldID?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_Response_FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    responseID?: SortOrder
    fieldID?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Survey_Response_FieldMinOrderByAggregateInput = {
    id?: SortOrder
    responseID?: SortOrder
    fieldID?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type SurveyCreateNestedManyWithoutUserInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type Survey_ResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<Survey_ResponseCreateWithoutUserInput, Survey_ResponseUncheckedCreateWithoutUserInput> | Survey_ResponseCreateWithoutUserInput[] | Survey_ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutUserInput | Survey_ResponseCreateOrConnectWithoutUserInput[]
    createMany?: Survey_ResponseCreateManyUserInputEnvelope
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
  }

  export type SurveyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
  }

  export type Survey_ResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Survey_ResponseCreateWithoutUserInput, Survey_ResponseUncheckedCreateWithoutUserInput> | Survey_ResponseCreateWithoutUserInput[] | Survey_ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutUserInput | Survey_ResponseCreateOrConnectWithoutUserInput[]
    createMany?: Survey_ResponseCreateManyUserInputEnvelope
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type SurveyUpdateManyWithoutUserNestedInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutUserInput | SurveyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutUserInput | SurveyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutUserInput | SurveyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type Survey_ResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<Survey_ResponseCreateWithoutUserInput, Survey_ResponseUncheckedCreateWithoutUserInput> | Survey_ResponseCreateWithoutUserInput[] | Survey_ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutUserInput | Survey_ResponseCreateOrConnectWithoutUserInput[]
    upsert?: Survey_ResponseUpsertWithWhereUniqueWithoutUserInput | Survey_ResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Survey_ResponseCreateManyUserInputEnvelope
    set?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    disconnect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    delete?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    update?: Survey_ResponseUpdateWithWhereUniqueWithoutUserInput | Survey_ResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Survey_ResponseUpdateManyWithWhereWithoutUserInput | Survey_ResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Survey_ResponseScalarWhereInput | Survey_ResponseScalarWhereInput[]
  }

  export type SurveyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput> | SurveyCreateWithoutUserInput[] | SurveyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput | SurveyCreateOrConnectWithoutUserInput[]
    upsert?: SurveyUpsertWithWhereUniqueWithoutUserInput | SurveyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SurveyCreateManyUserInputEnvelope
    set?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    disconnect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    delete?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    connect?: SurveyWhereUniqueInput | SurveyWhereUniqueInput[]
    update?: SurveyUpdateWithWhereUniqueWithoutUserInput | SurveyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SurveyUpdateManyWithWhereWithoutUserInput | SurveyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
  }

  export type Survey_ResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Survey_ResponseCreateWithoutUserInput, Survey_ResponseUncheckedCreateWithoutUserInput> | Survey_ResponseCreateWithoutUserInput[] | Survey_ResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutUserInput | Survey_ResponseCreateOrConnectWithoutUserInput[]
    upsert?: Survey_ResponseUpsertWithWhereUniqueWithoutUserInput | Survey_ResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Survey_ResponseCreateManyUserInputEnvelope
    set?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    disconnect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    delete?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    update?: Survey_ResponseUpdateWithWhereUniqueWithoutUserInput | Survey_ResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Survey_ResponseUpdateManyWithWhereWithoutUserInput | Survey_ResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Survey_ResponseScalarWhereInput | Survey_ResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSurveyInput = {
    create?: XOR<UserCreateWithoutSurveyInput, UserUncheckedCreateWithoutSurveyInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveyInput
    connect?: UserWhereUniqueInput
  }

  export type Survey_FieldCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Survey_FieldCreateWithoutSurveyInput, Survey_FieldUncheckedCreateWithoutSurveyInput> | Survey_FieldCreateWithoutSurveyInput[] | Survey_FieldUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_FieldCreateOrConnectWithoutSurveyInput | Survey_FieldCreateOrConnectWithoutSurveyInput[]
    createMany?: Survey_FieldCreateManySurveyInputEnvelope
    connect?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
  }

  export type Survey_ResponseCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Survey_ResponseCreateWithoutSurveyInput, Survey_ResponseUncheckedCreateWithoutSurveyInput> | Survey_ResponseCreateWithoutSurveyInput[] | Survey_ResponseUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutSurveyInput | Survey_ResponseCreateOrConnectWithoutSurveyInput[]
    createMany?: Survey_ResponseCreateManySurveyInputEnvelope
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
  }

  export type Survey_FieldUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Survey_FieldCreateWithoutSurveyInput, Survey_FieldUncheckedCreateWithoutSurveyInput> | Survey_FieldCreateWithoutSurveyInput[] | Survey_FieldUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_FieldCreateOrConnectWithoutSurveyInput | Survey_FieldCreateOrConnectWithoutSurveyInput[]
    createMany?: Survey_FieldCreateManySurveyInputEnvelope
    connect?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
  }

  export type Survey_ResponseUncheckedCreateNestedManyWithoutSurveyInput = {
    create?: XOR<Survey_ResponseCreateWithoutSurveyInput, Survey_ResponseUncheckedCreateWithoutSurveyInput> | Survey_ResponseCreateWithoutSurveyInput[] | Survey_ResponseUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutSurveyInput | Survey_ResponseCreateOrConnectWithoutSurveyInput[]
    createMany?: Survey_ResponseCreateManySurveyInputEnvelope
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSurveyNestedInput = {
    create?: XOR<UserCreateWithoutSurveyInput, UserUncheckedCreateWithoutSurveyInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurveyInput
    upsert?: UserUpsertWithoutSurveyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurveyInput, UserUpdateWithoutSurveyInput>, UserUncheckedUpdateWithoutSurveyInput>
  }

  export type Survey_FieldUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Survey_FieldCreateWithoutSurveyInput, Survey_FieldUncheckedCreateWithoutSurveyInput> | Survey_FieldCreateWithoutSurveyInput[] | Survey_FieldUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_FieldCreateOrConnectWithoutSurveyInput | Survey_FieldCreateOrConnectWithoutSurveyInput[]
    upsert?: Survey_FieldUpsertWithWhereUniqueWithoutSurveyInput | Survey_FieldUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: Survey_FieldCreateManySurveyInputEnvelope
    set?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    disconnect?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    delete?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    connect?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    update?: Survey_FieldUpdateWithWhereUniqueWithoutSurveyInput | Survey_FieldUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: Survey_FieldUpdateManyWithWhereWithoutSurveyInput | Survey_FieldUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: Survey_FieldScalarWhereInput | Survey_FieldScalarWhereInput[]
  }

  export type Survey_ResponseUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Survey_ResponseCreateWithoutSurveyInput, Survey_ResponseUncheckedCreateWithoutSurveyInput> | Survey_ResponseCreateWithoutSurveyInput[] | Survey_ResponseUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutSurveyInput | Survey_ResponseCreateOrConnectWithoutSurveyInput[]
    upsert?: Survey_ResponseUpsertWithWhereUniqueWithoutSurveyInput | Survey_ResponseUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: Survey_ResponseCreateManySurveyInputEnvelope
    set?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    disconnect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    delete?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    update?: Survey_ResponseUpdateWithWhereUniqueWithoutSurveyInput | Survey_ResponseUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: Survey_ResponseUpdateManyWithWhereWithoutSurveyInput | Survey_ResponseUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: Survey_ResponseScalarWhereInput | Survey_ResponseScalarWhereInput[]
  }

  export type Survey_FieldUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Survey_FieldCreateWithoutSurveyInput, Survey_FieldUncheckedCreateWithoutSurveyInput> | Survey_FieldCreateWithoutSurveyInput[] | Survey_FieldUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_FieldCreateOrConnectWithoutSurveyInput | Survey_FieldCreateOrConnectWithoutSurveyInput[]
    upsert?: Survey_FieldUpsertWithWhereUniqueWithoutSurveyInput | Survey_FieldUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: Survey_FieldCreateManySurveyInputEnvelope
    set?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    disconnect?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    delete?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    connect?: Survey_FieldWhereUniqueInput | Survey_FieldWhereUniqueInput[]
    update?: Survey_FieldUpdateWithWhereUniqueWithoutSurveyInput | Survey_FieldUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: Survey_FieldUpdateManyWithWhereWithoutSurveyInput | Survey_FieldUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: Survey_FieldScalarWhereInput | Survey_FieldScalarWhereInput[]
  }

  export type Survey_ResponseUncheckedUpdateManyWithoutSurveyNestedInput = {
    create?: XOR<Survey_ResponseCreateWithoutSurveyInput, Survey_ResponseUncheckedCreateWithoutSurveyInput> | Survey_ResponseCreateWithoutSurveyInput[] | Survey_ResponseUncheckedCreateWithoutSurveyInput[]
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutSurveyInput | Survey_ResponseCreateOrConnectWithoutSurveyInput[]
    upsert?: Survey_ResponseUpsertWithWhereUniqueWithoutSurveyInput | Survey_ResponseUpsertWithWhereUniqueWithoutSurveyInput[]
    createMany?: Survey_ResponseCreateManySurveyInputEnvelope
    set?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    disconnect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    delete?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    connect?: Survey_ResponseWhereUniqueInput | Survey_ResponseWhereUniqueInput[]
    update?: Survey_ResponseUpdateWithWhereUniqueWithoutSurveyInput | Survey_ResponseUpdateWithWhereUniqueWithoutSurveyInput[]
    updateMany?: Survey_ResponseUpdateManyWithWhereWithoutSurveyInput | Survey_ResponseUpdateManyWithWhereWithoutSurveyInput[]
    deleteMany?: Survey_ResponseScalarWhereInput | Survey_ResponseScalarWhereInput[]
  }

  export type SurveyCreateNestedOneWithoutSurvey_FieldInput = {
    create?: XOR<SurveyCreateWithoutSurvey_FieldInput, SurveyUncheckedCreateWithoutSurvey_FieldInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutSurvey_FieldInput
    connect?: SurveyWhereUniqueInput
  }

  export type Survey_Response_FieldCreateNestedManyWithoutFieldInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutFieldInput, Survey_Response_FieldUncheckedCreateWithoutFieldInput> | Survey_Response_FieldCreateWithoutFieldInput[] | Survey_Response_FieldUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutFieldInput | Survey_Response_FieldCreateOrConnectWithoutFieldInput[]
    createMany?: Survey_Response_FieldCreateManyFieldInputEnvelope
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
  }

  export type Survey_Response_FieldUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutFieldInput, Survey_Response_FieldUncheckedCreateWithoutFieldInput> | Survey_Response_FieldCreateWithoutFieldInput[] | Survey_Response_FieldUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutFieldInput | Survey_Response_FieldCreateOrConnectWithoutFieldInput[]
    createMany?: Survey_Response_FieldCreateManyFieldInputEnvelope
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SurveyUpdateOneRequiredWithoutSurvey_FieldNestedInput = {
    create?: XOR<SurveyCreateWithoutSurvey_FieldInput, SurveyUncheckedCreateWithoutSurvey_FieldInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutSurvey_FieldInput
    upsert?: SurveyUpsertWithoutSurvey_FieldInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutSurvey_FieldInput, SurveyUpdateWithoutSurvey_FieldInput>, SurveyUncheckedUpdateWithoutSurvey_FieldInput>
  }

  export type Survey_Response_FieldUpdateManyWithoutFieldNestedInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutFieldInput, Survey_Response_FieldUncheckedCreateWithoutFieldInput> | Survey_Response_FieldCreateWithoutFieldInput[] | Survey_Response_FieldUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutFieldInput | Survey_Response_FieldCreateOrConnectWithoutFieldInput[]
    upsert?: Survey_Response_FieldUpsertWithWhereUniqueWithoutFieldInput | Survey_Response_FieldUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: Survey_Response_FieldCreateManyFieldInputEnvelope
    set?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    disconnect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    delete?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    update?: Survey_Response_FieldUpdateWithWhereUniqueWithoutFieldInput | Survey_Response_FieldUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: Survey_Response_FieldUpdateManyWithWhereWithoutFieldInput | Survey_Response_FieldUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: Survey_Response_FieldScalarWhereInput | Survey_Response_FieldScalarWhereInput[]
  }

  export type Survey_Response_FieldUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutFieldInput, Survey_Response_FieldUncheckedCreateWithoutFieldInput> | Survey_Response_FieldCreateWithoutFieldInput[] | Survey_Response_FieldUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutFieldInput | Survey_Response_FieldCreateOrConnectWithoutFieldInput[]
    upsert?: Survey_Response_FieldUpsertWithWhereUniqueWithoutFieldInput | Survey_Response_FieldUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: Survey_Response_FieldCreateManyFieldInputEnvelope
    set?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    disconnect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    delete?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    update?: Survey_Response_FieldUpdateWithWhereUniqueWithoutFieldInput | Survey_Response_FieldUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: Survey_Response_FieldUpdateManyWithWhereWithoutFieldInput | Survey_Response_FieldUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: Survey_Response_FieldScalarWhereInput | Survey_Response_FieldScalarWhereInput[]
  }

  export type SurveyCreateNestedOneWithoutSurvey_ResponseInput = {
    create?: XOR<SurveyCreateWithoutSurvey_ResponseInput, SurveyUncheckedCreateWithoutSurvey_ResponseInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutSurvey_ResponseInput
    connect?: SurveyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSurvey_ResponseInput = {
    create?: XOR<UserCreateWithoutSurvey_ResponseInput, UserUncheckedCreateWithoutSurvey_ResponseInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurvey_ResponseInput
    connect?: UserWhereUniqueInput
  }

  export type Survey_Response_FieldCreateNestedManyWithoutResponseInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutResponseInput, Survey_Response_FieldUncheckedCreateWithoutResponseInput> | Survey_Response_FieldCreateWithoutResponseInput[] | Survey_Response_FieldUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutResponseInput | Survey_Response_FieldCreateOrConnectWithoutResponseInput[]
    createMany?: Survey_Response_FieldCreateManyResponseInputEnvelope
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
  }

  export type Survey_Response_FieldUncheckedCreateNestedManyWithoutResponseInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutResponseInput, Survey_Response_FieldUncheckedCreateWithoutResponseInput> | Survey_Response_FieldCreateWithoutResponseInput[] | Survey_Response_FieldUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutResponseInput | Survey_Response_FieldCreateOrConnectWithoutResponseInput[]
    createMany?: Survey_Response_FieldCreateManyResponseInputEnvelope
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
  }

  export type SurveyUpdateOneRequiredWithoutSurvey_ResponseNestedInput = {
    create?: XOR<SurveyCreateWithoutSurvey_ResponseInput, SurveyUncheckedCreateWithoutSurvey_ResponseInput>
    connectOrCreate?: SurveyCreateOrConnectWithoutSurvey_ResponseInput
    upsert?: SurveyUpsertWithoutSurvey_ResponseInput
    connect?: SurveyWhereUniqueInput
    update?: XOR<XOR<SurveyUpdateToOneWithWhereWithoutSurvey_ResponseInput, SurveyUpdateWithoutSurvey_ResponseInput>, SurveyUncheckedUpdateWithoutSurvey_ResponseInput>
  }

  export type UserUpdateOneWithoutSurvey_ResponseNestedInput = {
    create?: XOR<UserCreateWithoutSurvey_ResponseInput, UserUncheckedCreateWithoutSurvey_ResponseInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurvey_ResponseInput
    upsert?: UserUpsertWithoutSurvey_ResponseInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurvey_ResponseInput, UserUpdateWithoutSurvey_ResponseInput>, UserUncheckedUpdateWithoutSurvey_ResponseInput>
  }

  export type Survey_Response_FieldUpdateManyWithoutResponseNestedInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutResponseInput, Survey_Response_FieldUncheckedCreateWithoutResponseInput> | Survey_Response_FieldCreateWithoutResponseInput[] | Survey_Response_FieldUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutResponseInput | Survey_Response_FieldCreateOrConnectWithoutResponseInput[]
    upsert?: Survey_Response_FieldUpsertWithWhereUniqueWithoutResponseInput | Survey_Response_FieldUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: Survey_Response_FieldCreateManyResponseInputEnvelope
    set?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    disconnect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    delete?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    update?: Survey_Response_FieldUpdateWithWhereUniqueWithoutResponseInput | Survey_Response_FieldUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: Survey_Response_FieldUpdateManyWithWhereWithoutResponseInput | Survey_Response_FieldUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: Survey_Response_FieldScalarWhereInput | Survey_Response_FieldScalarWhereInput[]
  }

  export type Survey_Response_FieldUncheckedUpdateManyWithoutResponseNestedInput = {
    create?: XOR<Survey_Response_FieldCreateWithoutResponseInput, Survey_Response_FieldUncheckedCreateWithoutResponseInput> | Survey_Response_FieldCreateWithoutResponseInput[] | Survey_Response_FieldUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: Survey_Response_FieldCreateOrConnectWithoutResponseInput | Survey_Response_FieldCreateOrConnectWithoutResponseInput[]
    upsert?: Survey_Response_FieldUpsertWithWhereUniqueWithoutResponseInput | Survey_Response_FieldUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: Survey_Response_FieldCreateManyResponseInputEnvelope
    set?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    disconnect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    delete?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    connect?: Survey_Response_FieldWhereUniqueInput | Survey_Response_FieldWhereUniqueInput[]
    update?: Survey_Response_FieldUpdateWithWhereUniqueWithoutResponseInput | Survey_Response_FieldUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: Survey_Response_FieldUpdateManyWithWhereWithoutResponseInput | Survey_Response_FieldUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: Survey_Response_FieldScalarWhereInput | Survey_Response_FieldScalarWhereInput[]
  }

  export type Survey_ResponseCreateNestedOneWithoutSurvey_Response_FieldInput = {
    create?: XOR<Survey_ResponseCreateWithoutSurvey_Response_FieldInput, Survey_ResponseUncheckedCreateWithoutSurvey_Response_FieldInput>
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutSurvey_Response_FieldInput
    connect?: Survey_ResponseWhereUniqueInput
  }

  export type Survey_FieldCreateNestedOneWithoutSurvey_Response_FieldInput = {
    create?: XOR<Survey_FieldCreateWithoutSurvey_Response_FieldInput, Survey_FieldUncheckedCreateWithoutSurvey_Response_FieldInput>
    connectOrCreate?: Survey_FieldCreateOrConnectWithoutSurvey_Response_FieldInput
    connect?: Survey_FieldWhereUniqueInput
  }

  export type Survey_ResponseUpdateOneRequiredWithoutSurvey_Response_FieldNestedInput = {
    create?: XOR<Survey_ResponseCreateWithoutSurvey_Response_FieldInput, Survey_ResponseUncheckedCreateWithoutSurvey_Response_FieldInput>
    connectOrCreate?: Survey_ResponseCreateOrConnectWithoutSurvey_Response_FieldInput
    upsert?: Survey_ResponseUpsertWithoutSurvey_Response_FieldInput
    connect?: Survey_ResponseWhereUniqueInput
    update?: XOR<XOR<Survey_ResponseUpdateToOneWithWhereWithoutSurvey_Response_FieldInput, Survey_ResponseUpdateWithoutSurvey_Response_FieldInput>, Survey_ResponseUncheckedUpdateWithoutSurvey_Response_FieldInput>
  }

  export type Survey_FieldUpdateOneRequiredWithoutSurvey_Response_FieldNestedInput = {
    create?: XOR<Survey_FieldCreateWithoutSurvey_Response_FieldInput, Survey_FieldUncheckedCreateWithoutSurvey_Response_FieldInput>
    connectOrCreate?: Survey_FieldCreateOrConnectWithoutSurvey_Response_FieldInput
    upsert?: Survey_FieldUpsertWithoutSurvey_Response_FieldInput
    connect?: Survey_FieldWhereUniqueInput
    update?: XOR<XOR<Survey_FieldUpdateToOneWithWhereWithoutSurvey_Response_FieldInput, Survey_FieldUpdateWithoutSurvey_Response_FieldInput>, Survey_FieldUncheckedUpdateWithoutSurvey_Response_FieldInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey?: SurveyCreateNestedManyWithoutUserInput
    Survey_Response?: Survey_ResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey?: SurveyUncheckedCreateNestedManyWithoutUserInput
    Survey_Response?: Survey_ResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    session_token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type RoleCreateWithoutUserInput = {
    id?: string
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: string
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type SurveyCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Field?: Survey_FieldCreateNestedManyWithoutSurveyInput
    Survey_Response?: Survey_ResponseCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Field?: Survey_FieldUncheckedCreateNestedManyWithoutSurveyInput
    Survey_Response?: Survey_ResponseUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyCreateOrConnectWithoutUserInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput>
  }

  export type SurveyCreateManyUserInputEnvelope = {
    data: SurveyCreateManyUserInput | SurveyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Survey_ResponseCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    survey: SurveyCreateNestedOneWithoutSurvey_ResponseInput
    Survey_Response_Field?: Survey_Response_FieldCreateNestedManyWithoutResponseInput
  }

  export type Survey_ResponseUncheckedCreateWithoutUserInput = {
    id?: string
    surveyID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedCreateNestedManyWithoutResponseInput
  }

  export type Survey_ResponseCreateOrConnectWithoutUserInput = {
    where: Survey_ResponseWhereUniqueInput
    create: XOR<Survey_ResponseCreateWithoutUserInput, Survey_ResponseUncheckedCreateWithoutUserInput>
  }

  export type Survey_ResponseCreateManyUserInputEnvelope = {
    data: Survey_ResponseCreateManyUserInput | Survey_ResponseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurveyUpsertWithWhereUniqueWithoutUserInput = {
    where: SurveyWhereUniqueInput
    update: XOR<SurveyUpdateWithoutUserInput, SurveyUncheckedUpdateWithoutUserInput>
    create: XOR<SurveyCreateWithoutUserInput, SurveyUncheckedCreateWithoutUserInput>
  }

  export type SurveyUpdateWithWhereUniqueWithoutUserInput = {
    where: SurveyWhereUniqueInput
    data: XOR<SurveyUpdateWithoutUserInput, SurveyUncheckedUpdateWithoutUserInput>
  }

  export type SurveyUpdateManyWithWhereWithoutUserInput = {
    where: SurveyScalarWhereInput
    data: XOR<SurveyUpdateManyMutationInput, SurveyUncheckedUpdateManyWithoutUserInput>
  }

  export type SurveyScalarWhereInput = {
    AND?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
    OR?: SurveyScalarWhereInput[]
    NOT?: SurveyScalarWhereInput | SurveyScalarWhereInput[]
    id?: StringFilter<"Survey"> | string
    userID?: StringFilter<"Survey"> | string
    createdAt?: DateTimeFilter<"Survey"> | Date | string
    updatedAt?: DateTimeFilter<"Survey"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey"> | Date | string | null
  }

  export type Survey_ResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: Survey_ResponseWhereUniqueInput
    update: XOR<Survey_ResponseUpdateWithoutUserInput, Survey_ResponseUncheckedUpdateWithoutUserInput>
    create: XOR<Survey_ResponseCreateWithoutUserInput, Survey_ResponseUncheckedCreateWithoutUserInput>
  }

  export type Survey_ResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: Survey_ResponseWhereUniqueInput
    data: XOR<Survey_ResponseUpdateWithoutUserInput, Survey_ResponseUncheckedUpdateWithoutUserInput>
  }

  export type Survey_ResponseUpdateManyWithWhereWithoutUserInput = {
    where: Survey_ResponseScalarWhereInput
    data: XOR<Survey_ResponseUpdateManyMutationInput, Survey_ResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type Survey_ResponseScalarWhereInput = {
    AND?: Survey_ResponseScalarWhereInput | Survey_ResponseScalarWhereInput[]
    OR?: Survey_ResponseScalarWhereInput[]
    NOT?: Survey_ResponseScalarWhereInput | Survey_ResponseScalarWhereInput[]
    id?: StringFilter<"Survey_Response"> | string
    surveyID?: StringFilter<"Survey_Response"> | string
    userID?: StringNullableFilter<"Survey_Response"> | string | null
    createdAt?: DateTimeFilter<"Survey_Response"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Response"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Response"> | Date | string | null
  }

  export type UserCreateWithoutSurveyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    Survey_Response?: Survey_ResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSurveyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    roleId: string
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response?: Survey_ResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSurveyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurveyInput, UserUncheckedCreateWithoutSurveyInput>
  }

  export type Survey_FieldCreateWithoutSurveyInput = {
    id?: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response_Field?: Survey_Response_FieldCreateNestedManyWithoutFieldInput
  }

  export type Survey_FieldUncheckedCreateWithoutSurveyInput = {
    id?: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedCreateNestedManyWithoutFieldInput
  }

  export type Survey_FieldCreateOrConnectWithoutSurveyInput = {
    where: Survey_FieldWhereUniqueInput
    create: XOR<Survey_FieldCreateWithoutSurveyInput, Survey_FieldUncheckedCreateWithoutSurveyInput>
  }

  export type Survey_FieldCreateManySurveyInputEnvelope = {
    data: Survey_FieldCreateManySurveyInput | Survey_FieldCreateManySurveyInput[]
    skipDuplicates?: boolean
  }

  export type Survey_ResponseCreateWithoutSurveyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutSurvey_ResponseInput
    Survey_Response_Field?: Survey_Response_FieldCreateNestedManyWithoutResponseInput
  }

  export type Survey_ResponseUncheckedCreateWithoutSurveyInput = {
    id?: string
    userID?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedCreateNestedManyWithoutResponseInput
  }

  export type Survey_ResponseCreateOrConnectWithoutSurveyInput = {
    where: Survey_ResponseWhereUniqueInput
    create: XOR<Survey_ResponseCreateWithoutSurveyInput, Survey_ResponseUncheckedCreateWithoutSurveyInput>
  }

  export type Survey_ResponseCreateManySurveyInputEnvelope = {
    data: Survey_ResponseCreateManySurveyInput | Survey_ResponseCreateManySurveyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSurveyInput = {
    update: XOR<UserUpdateWithoutSurveyInput, UserUncheckedUpdateWithoutSurveyInput>
    create: XOR<UserCreateWithoutSurveyInput, UserUncheckedCreateWithoutSurveyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurveyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurveyInput, UserUncheckedUpdateWithoutSurveyInput>
  }

  export type UserUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    Survey_Response?: Survey_ResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response?: Survey_ResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Survey_FieldUpsertWithWhereUniqueWithoutSurveyInput = {
    where: Survey_FieldWhereUniqueInput
    update: XOR<Survey_FieldUpdateWithoutSurveyInput, Survey_FieldUncheckedUpdateWithoutSurveyInput>
    create: XOR<Survey_FieldCreateWithoutSurveyInput, Survey_FieldUncheckedCreateWithoutSurveyInput>
  }

  export type Survey_FieldUpdateWithWhereUniqueWithoutSurveyInput = {
    where: Survey_FieldWhereUniqueInput
    data: XOR<Survey_FieldUpdateWithoutSurveyInput, Survey_FieldUncheckedUpdateWithoutSurveyInput>
  }

  export type Survey_FieldUpdateManyWithWhereWithoutSurveyInput = {
    where: Survey_FieldScalarWhereInput
    data: XOR<Survey_FieldUpdateManyMutationInput, Survey_FieldUncheckedUpdateManyWithoutSurveyInput>
  }

  export type Survey_FieldScalarWhereInput = {
    AND?: Survey_FieldScalarWhereInput | Survey_FieldScalarWhereInput[]
    OR?: Survey_FieldScalarWhereInput[]
    NOT?: Survey_FieldScalarWhereInput | Survey_FieldScalarWhereInput[]
    id?: StringFilter<"Survey_Field"> | string
    surveyID?: StringFilter<"Survey_Field"> | string
    field?: StringNullableFilter<"Survey_Field"> | string | null
    type?: StringFilter<"Survey_Field"> | string
    options?: StringNullableFilter<"Survey_Field"> | string | null
    required?: BoolFilter<"Survey_Field"> | boolean
    createdAt?: DateTimeFilter<"Survey_Field"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Field"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Field"> | Date | string | null
  }

  export type Survey_ResponseUpsertWithWhereUniqueWithoutSurveyInput = {
    where: Survey_ResponseWhereUniqueInput
    update: XOR<Survey_ResponseUpdateWithoutSurveyInput, Survey_ResponseUncheckedUpdateWithoutSurveyInput>
    create: XOR<Survey_ResponseCreateWithoutSurveyInput, Survey_ResponseUncheckedCreateWithoutSurveyInput>
  }

  export type Survey_ResponseUpdateWithWhereUniqueWithoutSurveyInput = {
    where: Survey_ResponseWhereUniqueInput
    data: XOR<Survey_ResponseUpdateWithoutSurveyInput, Survey_ResponseUncheckedUpdateWithoutSurveyInput>
  }

  export type Survey_ResponseUpdateManyWithWhereWithoutSurveyInput = {
    where: Survey_ResponseScalarWhereInput
    data: XOR<Survey_ResponseUpdateManyMutationInput, Survey_ResponseUncheckedUpdateManyWithoutSurveyInput>
  }

  export type SurveyCreateWithoutSurvey_FieldInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSurveyInput
    Survey_Response?: Survey_ResponseCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateWithoutSurvey_FieldInput = {
    id?: string
    userID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Response?: Survey_ResponseUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyCreateOrConnectWithoutSurvey_FieldInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutSurvey_FieldInput, SurveyUncheckedCreateWithoutSurvey_FieldInput>
  }

  export type Survey_Response_FieldCreateWithoutFieldInput = {
    id?: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    response: Survey_ResponseCreateNestedOneWithoutSurvey_Response_FieldInput
  }

  export type Survey_Response_FieldUncheckedCreateWithoutFieldInput = {
    id?: string
    responseID: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_Response_FieldCreateOrConnectWithoutFieldInput = {
    where: Survey_Response_FieldWhereUniqueInput
    create: XOR<Survey_Response_FieldCreateWithoutFieldInput, Survey_Response_FieldUncheckedCreateWithoutFieldInput>
  }

  export type Survey_Response_FieldCreateManyFieldInputEnvelope = {
    data: Survey_Response_FieldCreateManyFieldInput | Survey_Response_FieldCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type SurveyUpsertWithoutSurvey_FieldInput = {
    update: XOR<SurveyUpdateWithoutSurvey_FieldInput, SurveyUncheckedUpdateWithoutSurvey_FieldInput>
    create: XOR<SurveyCreateWithoutSurvey_FieldInput, SurveyUncheckedCreateWithoutSurvey_FieldInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutSurvey_FieldInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutSurvey_FieldInput, SurveyUncheckedUpdateWithoutSurvey_FieldInput>
  }

  export type SurveyUpdateWithoutSurvey_FieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSurveyNestedInput
    Survey_Response?: Survey_ResponseUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateWithoutSurvey_FieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response?: Survey_ResponseUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type Survey_Response_FieldUpsertWithWhereUniqueWithoutFieldInput = {
    where: Survey_Response_FieldWhereUniqueInput
    update: XOR<Survey_Response_FieldUpdateWithoutFieldInput, Survey_Response_FieldUncheckedUpdateWithoutFieldInput>
    create: XOR<Survey_Response_FieldCreateWithoutFieldInput, Survey_Response_FieldUncheckedCreateWithoutFieldInput>
  }

  export type Survey_Response_FieldUpdateWithWhereUniqueWithoutFieldInput = {
    where: Survey_Response_FieldWhereUniqueInput
    data: XOR<Survey_Response_FieldUpdateWithoutFieldInput, Survey_Response_FieldUncheckedUpdateWithoutFieldInput>
  }

  export type Survey_Response_FieldUpdateManyWithWhereWithoutFieldInput = {
    where: Survey_Response_FieldScalarWhereInput
    data: XOR<Survey_Response_FieldUpdateManyMutationInput, Survey_Response_FieldUncheckedUpdateManyWithoutFieldInput>
  }

  export type Survey_Response_FieldScalarWhereInput = {
    AND?: Survey_Response_FieldScalarWhereInput | Survey_Response_FieldScalarWhereInput[]
    OR?: Survey_Response_FieldScalarWhereInput[]
    NOT?: Survey_Response_FieldScalarWhereInput | Survey_Response_FieldScalarWhereInput[]
    id?: StringFilter<"Survey_Response_Field"> | string
    responseID?: StringFilter<"Survey_Response_Field"> | string
    fieldID?: StringFilter<"Survey_Response_Field"> | string
    value?: StringNullableFilter<"Survey_Response_Field"> | string | null
    createdAt?: DateTimeFilter<"Survey_Response_Field"> | Date | string
    updatedAt?: DateTimeFilter<"Survey_Response_Field"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Survey_Response_Field"> | Date | string | null
  }

  export type SurveyCreateWithoutSurvey_ResponseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSurveyInput
    Survey_Field?: Survey_FieldCreateNestedManyWithoutSurveyInput
  }

  export type SurveyUncheckedCreateWithoutSurvey_ResponseInput = {
    id?: string
    userID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey_Field?: Survey_FieldUncheckedCreateNestedManyWithoutSurveyInput
  }

  export type SurveyCreateOrConnectWithoutSurvey_ResponseInput = {
    where: SurveyWhereUniqueInput
    create: XOR<SurveyCreateWithoutSurvey_ResponseInput, SurveyUncheckedCreateWithoutSurvey_ResponseInput>
  }

  export type UserCreateWithoutSurvey_ResponseInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    Survey?: SurveyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSurvey_ResponseInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    roleId: string
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Survey?: SurveyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSurvey_ResponseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurvey_ResponseInput, UserUncheckedCreateWithoutSurvey_ResponseInput>
  }

  export type Survey_Response_FieldCreateWithoutResponseInput = {
    id?: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    field: Survey_FieldCreateNestedOneWithoutSurvey_Response_FieldInput
  }

  export type Survey_Response_FieldUncheckedCreateWithoutResponseInput = {
    id?: string
    fieldID: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_Response_FieldCreateOrConnectWithoutResponseInput = {
    where: Survey_Response_FieldWhereUniqueInput
    create: XOR<Survey_Response_FieldCreateWithoutResponseInput, Survey_Response_FieldUncheckedCreateWithoutResponseInput>
  }

  export type Survey_Response_FieldCreateManyResponseInputEnvelope = {
    data: Survey_Response_FieldCreateManyResponseInput | Survey_Response_FieldCreateManyResponseInput[]
    skipDuplicates?: boolean
  }

  export type SurveyUpsertWithoutSurvey_ResponseInput = {
    update: XOR<SurveyUpdateWithoutSurvey_ResponseInput, SurveyUncheckedUpdateWithoutSurvey_ResponseInput>
    create: XOR<SurveyCreateWithoutSurvey_ResponseInput, SurveyUncheckedCreateWithoutSurvey_ResponseInput>
    where?: SurveyWhereInput
  }

  export type SurveyUpdateToOneWithWhereWithoutSurvey_ResponseInput = {
    where?: SurveyWhereInput
    data: XOR<SurveyUpdateWithoutSurvey_ResponseInput, SurveyUncheckedUpdateWithoutSurvey_ResponseInput>
  }

  export type SurveyUpdateWithoutSurvey_ResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSurveyNestedInput
    Survey_Field?: Survey_FieldUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateWithoutSurvey_ResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Field?: Survey_FieldUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type UserUpsertWithoutSurvey_ResponseInput = {
    update: XOR<UserUpdateWithoutSurvey_ResponseInput, UserUncheckedUpdateWithoutSurvey_ResponseInput>
    create: XOR<UserCreateWithoutSurvey_ResponseInput, UserUncheckedCreateWithoutSurvey_ResponseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurvey_ResponseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurvey_ResponseInput, UserUncheckedUpdateWithoutSurvey_ResponseInput>
  }

  export type UserUpdateWithoutSurvey_ResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    Survey?: SurveyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSurvey_ResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey?: SurveyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Survey_Response_FieldUpsertWithWhereUniqueWithoutResponseInput = {
    where: Survey_Response_FieldWhereUniqueInput
    update: XOR<Survey_Response_FieldUpdateWithoutResponseInput, Survey_Response_FieldUncheckedUpdateWithoutResponseInput>
    create: XOR<Survey_Response_FieldCreateWithoutResponseInput, Survey_Response_FieldUncheckedCreateWithoutResponseInput>
  }

  export type Survey_Response_FieldUpdateWithWhereUniqueWithoutResponseInput = {
    where: Survey_Response_FieldWhereUniqueInput
    data: XOR<Survey_Response_FieldUpdateWithoutResponseInput, Survey_Response_FieldUncheckedUpdateWithoutResponseInput>
  }

  export type Survey_Response_FieldUpdateManyWithWhereWithoutResponseInput = {
    where: Survey_Response_FieldScalarWhereInput
    data: XOR<Survey_Response_FieldUpdateManyMutationInput, Survey_Response_FieldUncheckedUpdateManyWithoutResponseInput>
  }

  export type Survey_ResponseCreateWithoutSurvey_Response_FieldInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    survey: SurveyCreateNestedOneWithoutSurvey_ResponseInput
    user?: UserCreateNestedOneWithoutSurvey_ResponseInput
  }

  export type Survey_ResponseUncheckedCreateWithoutSurvey_Response_FieldInput = {
    id?: string
    surveyID: string
    userID?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_ResponseCreateOrConnectWithoutSurvey_Response_FieldInput = {
    where: Survey_ResponseWhereUniqueInput
    create: XOR<Survey_ResponseCreateWithoutSurvey_Response_FieldInput, Survey_ResponseUncheckedCreateWithoutSurvey_Response_FieldInput>
  }

  export type Survey_FieldCreateWithoutSurvey_Response_FieldInput = {
    id?: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    survey: SurveyCreateNestedOneWithoutSurvey_FieldInput
  }

  export type Survey_FieldUncheckedCreateWithoutSurvey_Response_FieldInput = {
    id?: string
    surveyID: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_FieldCreateOrConnectWithoutSurvey_Response_FieldInput = {
    where: Survey_FieldWhereUniqueInput
    create: XOR<Survey_FieldCreateWithoutSurvey_Response_FieldInput, Survey_FieldUncheckedCreateWithoutSurvey_Response_FieldInput>
  }

  export type Survey_ResponseUpsertWithoutSurvey_Response_FieldInput = {
    update: XOR<Survey_ResponseUpdateWithoutSurvey_Response_FieldInput, Survey_ResponseUncheckedUpdateWithoutSurvey_Response_FieldInput>
    create: XOR<Survey_ResponseCreateWithoutSurvey_Response_FieldInput, Survey_ResponseUncheckedCreateWithoutSurvey_Response_FieldInput>
    where?: Survey_ResponseWhereInput
  }

  export type Survey_ResponseUpdateToOneWithWhereWithoutSurvey_Response_FieldInput = {
    where?: Survey_ResponseWhereInput
    data: XOR<Survey_ResponseUpdateWithoutSurvey_Response_FieldInput, Survey_ResponseUncheckedUpdateWithoutSurvey_Response_FieldInput>
  }

  export type Survey_ResponseUpdateWithoutSurvey_Response_FieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    survey?: SurveyUpdateOneRequiredWithoutSurvey_ResponseNestedInput
    user?: UserUpdateOneWithoutSurvey_ResponseNestedInput
  }

  export type Survey_ResponseUncheckedUpdateWithoutSurvey_Response_FieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_FieldUpsertWithoutSurvey_Response_FieldInput = {
    update: XOR<Survey_FieldUpdateWithoutSurvey_Response_FieldInput, Survey_FieldUncheckedUpdateWithoutSurvey_Response_FieldInput>
    create: XOR<Survey_FieldCreateWithoutSurvey_Response_FieldInput, Survey_FieldUncheckedCreateWithoutSurvey_Response_FieldInput>
    where?: Survey_FieldWhereInput
  }

  export type Survey_FieldUpdateToOneWithWhereWithoutSurvey_Response_FieldInput = {
    where?: Survey_FieldWhereInput
    data: XOR<Survey_FieldUpdateWithoutSurvey_Response_FieldInput, Survey_FieldUncheckedUpdateWithoutSurvey_Response_FieldInput>
  }

  export type Survey_FieldUpdateWithoutSurvey_Response_FieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    survey?: SurveyUpdateOneRequiredWithoutSurvey_FieldNestedInput
  }

  export type Survey_FieldUncheckedUpdateWithoutSurvey_Response_FieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    session_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey?: SurveyUpdateManyWithoutUserNestedInput
    Survey_Response?: Survey_ResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey?: SurveyUncheckedUpdateManyWithoutUserNestedInput
    Survey_Response?: Survey_ResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SurveyCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_ResponseCreateManyUserInput = {
    id?: string
    surveyID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SurveyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Field?: Survey_FieldUpdateManyWithoutSurveyNestedInput
    Survey_Response?: Survey_ResponseUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Field?: Survey_FieldUncheckedUpdateManyWithoutSurveyNestedInput
    Survey_Response?: Survey_ResponseUncheckedUpdateManyWithoutSurveyNestedInput
  }

  export type SurveyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_ResponseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    survey?: SurveyUpdateOneRequiredWithoutSurvey_ResponseNestedInput
    Survey_Response_Field?: Survey_Response_FieldUpdateManyWithoutResponseNestedInput
  }

  export type Survey_ResponseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type Survey_ResponseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    surveyID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_FieldCreateManySurveyInput = {
    id?: string
    field?: string | null
    type: string
    options?: string | null
    required?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_ResponseCreateManySurveyInput = {
    id?: string
    userID?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_FieldUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUpdateManyWithoutFieldNestedInput
  }

  export type Survey_FieldUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type Survey_FieldUncheckedUpdateManyWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    field?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_ResponseUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutSurvey_ResponseNestedInput
    Survey_Response_Field?: Survey_Response_FieldUpdateManyWithoutResponseNestedInput
  }

  export type Survey_ResponseUncheckedUpdateWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Survey_Response_Field?: Survey_Response_FieldUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type Survey_ResponseUncheckedUpdateManyWithoutSurveyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldCreateManyFieldInput = {
    id?: string
    responseID: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_Response_FieldUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: Survey_ResponseUpdateOneRequiredWithoutSurvey_Response_FieldNestedInput
  }

  export type Survey_Response_FieldUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseID?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseID?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldCreateManyResponseInput = {
    id?: string
    fieldID: string
    value?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Survey_Response_FieldUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    field?: Survey_FieldUpdateOneRequiredWithoutSurvey_Response_FieldNestedInput
  }

  export type Survey_Response_FieldUncheckedUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldID?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Survey_Response_FieldUncheckedUpdateManyWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldID?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}