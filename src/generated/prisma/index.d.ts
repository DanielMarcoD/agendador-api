
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventParticipant
 * 
 */
export type EventParticipant = $Result.DefaultSelection<Prisma.$EventParticipantPayload>
/**
 * Model DeletedEventOccurrence
 * 
 */
export type DeletedEventOccurrence = $Result.DefaultSelection<Prisma.$DeletedEventOccurrencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ParticipantRole: {
  VIEWER: 'VIEWER',
  EDITOR: 'EDITOR'
};

export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole]


export const Recurrence: {
  NONE: 'NONE',
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type Recurrence = (typeof Recurrence)[keyof typeof Recurrence]

}

export type ParticipantRole = $Enums.ParticipantRole

export const ParticipantRole: typeof $Enums.ParticipantRole

export type Recurrence = $Enums.Recurrence

export const Recurrence: typeof $Enums.Recurrence

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventParticipant`: Exposes CRUD operations for the **EventParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventParticipants
    * const eventParticipants = await prisma.eventParticipant.findMany()
    * ```
    */
  get eventParticipant(): Prisma.EventParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deletedEventOccurrence`: Exposes CRUD operations for the **DeletedEventOccurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeletedEventOccurrences
    * const deletedEventOccurrences = await prisma.deletedEventOccurrence.findMany()
    * ```
    */
  get deletedEventOccurrence(): Prisma.DeletedEventOccurrenceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Event: 'Event',
    EventParticipant: 'EventParticipant',
    DeletedEventOccurrence: 'DeletedEventOccurrence'
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
      modelProps: "user" | "event" | "eventParticipant" | "deletedEventOccurrence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventParticipant: {
        payload: Prisma.$EventParticipantPayload<ExtArgs>
        fields: Prisma.EventParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findFirst: {
            args: Prisma.EventParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findMany: {
            args: Prisma.EventParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          create: {
            args: Prisma.EventParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          createMany: {
            args: Prisma.EventParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          delete: {
            args: Prisma.EventParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          update: {
            args: Prisma.EventParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          deleteMany: {
            args: Prisma.EventParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          upsert: {
            args: Prisma.EventParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          aggregate: {
            args: Prisma.EventParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventParticipant>
          }
          groupBy: {
            args: Prisma.EventParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantCountAggregateOutputType> | number
          }
        }
      }
      DeletedEventOccurrence: {
        payload: Prisma.$DeletedEventOccurrencePayload<ExtArgs>
        fields: Prisma.DeletedEventOccurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeletedEventOccurrenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeletedEventOccurrenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>
          }
          findFirst: {
            args: Prisma.DeletedEventOccurrenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeletedEventOccurrenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>
          }
          findMany: {
            args: Prisma.DeletedEventOccurrenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>[]
          }
          create: {
            args: Prisma.DeletedEventOccurrenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>
          }
          createMany: {
            args: Prisma.DeletedEventOccurrenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeletedEventOccurrenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>[]
          }
          delete: {
            args: Prisma.DeletedEventOccurrenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>
          }
          update: {
            args: Prisma.DeletedEventOccurrenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>
          }
          deleteMany: {
            args: Prisma.DeletedEventOccurrenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeletedEventOccurrenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeletedEventOccurrenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>[]
          }
          upsert: {
            args: Prisma.DeletedEventOccurrenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedEventOccurrencePayload>
          }
          aggregate: {
            args: Prisma.DeletedEventOccurrenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeletedEventOccurrence>
          }
          groupBy: {
            args: Prisma.DeletedEventOccurrenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeletedEventOccurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeletedEventOccurrenceCountArgs<ExtArgs>
            result: $Utils.Optional<DeletedEventOccurrenceCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    event?: EventOmit
    eventParticipant?: EventParticipantOmit
    deletedEventOccurrence?: DeletedEventOccurrenceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    events: number
    EventParticipant: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    EventParticipant?: boolean | UserCountOutputTypeCountEventParticipantArgs
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
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    EventParticipant: number
    DeletedEventOccurrence: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventParticipant?: boolean | EventCountOutputTypeCountEventParticipantArgs
    DeletedEventOccurrence?: boolean | EventCountOutputTypeCountDeletedEventOccurrenceArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountDeletedEventOccurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeletedEventOccurrenceWhereInput
  }


  /**
   * Models
   */

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
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
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
    name: string
    email: string
    passwordHash: string
    createdAt: Date
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
    passwordHash?: boolean
    createdAt?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    EventParticipant?: boolean | User$EventParticipantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    EventParticipant?: boolean | User$EventParticipantArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      EventParticipant: Prisma.$EventParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
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
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EventParticipant<T extends User$EventParticipantArgs<ExtArgs> = {}>(args?: Subset<T, User$EventParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.EventParticipant
   */
  export type User$EventParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    category: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    recurrence: $Enums.Recurrence | null
    parentEventId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    category: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    recurrence: $Enums.Recurrence | null
    parentEventId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    category: number
    startsAt: number
    endsAt: number
    createdAt: number
    recurrence: number
    parentEventId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    category?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    recurrence?: true
    parentEventId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    category?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    recurrence?: true
    parentEventId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    category?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    recurrence?: true
    parentEventId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string | null
    category: string
    startsAt: Date
    endsAt: Date
    createdAt: Date
    recurrence: $Enums.Recurrence
    parentEventId: string | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    recurrence?: boolean
    parentEventId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    EventParticipant?: boolean | Event$EventParticipantArgs<ExtArgs>
    DeletedEventOccurrence?: boolean | Event$DeletedEventOccurrenceArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    recurrence?: boolean
    parentEventId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    recurrence?: boolean
    parentEventId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    recurrence?: boolean
    parentEventId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "description" | "category" | "startsAt" | "endsAt" | "createdAt" | "recurrence" | "parentEventId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    EventParticipant?: boolean | Event$EventParticipantArgs<ExtArgs>
    DeletedEventOccurrence?: boolean | Event$DeletedEventOccurrenceArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      EventParticipant: Prisma.$EventParticipantPayload<ExtArgs>[]
      DeletedEventOccurrence: Prisma.$DeletedEventOccurrencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string | null
      category: string
      startsAt: Date
      endsAt: Date
      createdAt: Date
      recurrence: $Enums.Recurrence
      parentEventId: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EventParticipant<T extends Event$EventParticipantArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DeletedEventOccurrence<T extends Event$DeletedEventOccurrenceArgs<ExtArgs> = {}>(args?: Subset<T, Event$DeletedEventOccurrenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly ownerId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'String'>
    readonly startsAt: FieldRef<"Event", 'DateTime'>
    readonly endsAt: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly recurrence: FieldRef<"Event", 'Recurrence'>
    readonly parentEventId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.EventParticipant
   */
  export type Event$EventParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Event.DeletedEventOccurrence
   */
  export type Event$DeletedEventOccurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    where?: DeletedEventOccurrenceWhereInput
    orderBy?: DeletedEventOccurrenceOrderByWithRelationInput | DeletedEventOccurrenceOrderByWithRelationInput[]
    cursor?: DeletedEventOccurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeletedEventOccurrenceScalarFieldEnum | DeletedEventOccurrenceScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventParticipant
   */

  export type AggregateEventParticipant = {
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  export type EventParticipantMinAggregateOutputType = {
    eventId: string | null
    userId: string | null
    role: $Enums.ParticipantRole | null
    createdAt: Date | null
  }

  export type EventParticipantMaxAggregateOutputType = {
    eventId: string | null
    userId: string | null
    role: $Enums.ParticipantRole | null
    createdAt: Date | null
  }

  export type EventParticipantCountAggregateOutputType = {
    eventId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type EventParticipantMinAggregateInputType = {
    eventId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type EventParticipantMaxAggregateInputType = {
    eventId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type EventParticipantCountAggregateInputType = {
    eventId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type EventParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipant to aggregate.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventParticipants
    **/
    _count?: true | EventParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventParticipantMaxAggregateInputType
  }

  export type GetEventParticipantAggregateType<T extends EventParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateEventParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventParticipant[P]>
      : GetScalarType<T[P], AggregateEventParticipant[P]>
  }




  export type EventParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithAggregationInput | EventParticipantOrderByWithAggregationInput[]
    by: EventParticipantScalarFieldEnum[] | EventParticipantScalarFieldEnum
    having?: EventParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventParticipantCountAggregateInputType | true
    _min?: EventParticipantMinAggregateInputType
    _max?: EventParticipantMaxAggregateInputType
  }

  export type EventParticipantGroupByOutputType = {
    eventId: string
    userId: string
    role: $Enums.ParticipantRole
    createdAt: Date
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  type GetEventParticipantGroupByPayload<T extends EventParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
        }
      >
    >


  export type EventParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectScalar = {
    eventId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type EventParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "userId" | "role" | "createdAt", ExtArgs["result"]["eventParticipant"]>
  export type EventParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventParticipant"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      userId: string
      role: $Enums.ParticipantRole
      createdAt: Date
    }, ExtArgs["result"]["eventParticipant"]>
    composites: {}
  }

  type EventParticipantGetPayload<S extends boolean | null | undefined | EventParticipantDefaultArgs> = $Result.GetResult<Prisma.$EventParticipantPayload, S>

  type EventParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventParticipantCountAggregateInputType | true
    }

  export interface EventParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventParticipant'], meta: { name: 'EventParticipant' } }
    /**
     * Find zero or one EventParticipant that matches the filter.
     * @param {EventParticipantFindUniqueArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventParticipantFindUniqueArgs>(args: SelectSubset<T, EventParticipantFindUniqueArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventParticipantFindUniqueOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, EventParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventParticipantFindFirstArgs>(args?: SelectSubset<T, EventParticipantFindFirstArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, EventParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany()
     * 
     * // Get first 10 EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventParticipantFindManyArgs>(args?: SelectSubset<T, EventParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventParticipant.
     * @param {EventParticipantCreateArgs} args - Arguments to create a EventParticipant.
     * @example
     * // Create one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.create({
     *   data: {
     *     // ... data to create a EventParticipant
     *   }
     * })
     * 
     */
    create<T extends EventParticipantCreateArgs>(args: SelectSubset<T, EventParticipantCreateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventParticipants.
     * @param {EventParticipantCreateManyArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventParticipantCreateManyArgs>(args?: SelectSubset<T, EventParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventParticipants and returns the data saved in the database.
     * @param {EventParticipantCreateManyAndReturnArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventParticipants and only return the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, EventParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventParticipant.
     * @param {EventParticipantDeleteArgs} args - Arguments to delete one EventParticipant.
     * @example
     * // Delete one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.delete({
     *   where: {
     *     // ... filter to delete one EventParticipant
     *   }
     * })
     * 
     */
    delete<T extends EventParticipantDeleteArgs>(args: SelectSubset<T, EventParticipantDeleteArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventParticipant.
     * @param {EventParticipantUpdateArgs} args - Arguments to update one EventParticipant.
     * @example
     * // Update one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventParticipantUpdateArgs>(args: SelectSubset<T, EventParticipantUpdateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventParticipants.
     * @param {EventParticipantDeleteManyArgs} args - Arguments to filter EventParticipants to delete.
     * @example
     * // Delete a few EventParticipants
     * const { count } = await prisma.eventParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventParticipantDeleteManyArgs>(args?: SelectSubset<T, EventParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventParticipantUpdateManyArgs>(args: SelectSubset<T, EventParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants and returns the data updated in the database.
     * @param {EventParticipantUpdateManyAndReturnArgs} args - Arguments to update many EventParticipants.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventParticipants and only return the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.updateManyAndReturn({
     *   select: { eventId: true },
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
    updateManyAndReturn<T extends EventParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, EventParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventParticipant.
     * @param {EventParticipantUpsertArgs} args - Arguments to update or create a EventParticipant.
     * @example
     * // Update or create a EventParticipant
     * const eventParticipant = await prisma.eventParticipant.upsert({
     *   create: {
     *     // ... data to create a EventParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventParticipant we want to update
     *   }
     * })
     */
    upsert<T extends EventParticipantUpsertArgs>(args: SelectSubset<T, EventParticipantUpsertArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantCountArgs} args - Arguments to filter EventParticipants to count.
     * @example
     * // Count the number of EventParticipants
     * const count = await prisma.eventParticipant.count({
     *   where: {
     *     // ... the filter for the EventParticipants we want to count
     *   }
     * })
    **/
    count<T extends EventParticipantCountArgs>(
      args?: Subset<T, EventParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventParticipantAggregateArgs>(args: Subset<T, EventParticipantAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantAggregateType<T>>

    /**
     * Group by EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantGroupByArgs} args - Group by arguments.
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
      T extends EventParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventParticipantGroupByArgs['orderBy'] }
        : { orderBy?: EventParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventParticipant model
   */
  readonly fields: EventParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventParticipant model
   */
  interface EventParticipantFieldRefs {
    readonly eventId: FieldRef<"EventParticipant", 'String'>
    readonly userId: FieldRef<"EventParticipant", 'String'>
    readonly role: FieldRef<"EventParticipant", 'ParticipantRole'>
    readonly createdAt: FieldRef<"EventParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventParticipant findUnique
   */
  export type EventParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findUniqueOrThrow
   */
  export type EventParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findFirst
   */
  export type EventParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findFirstOrThrow
   */
  export type EventParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findMany
   */
  export type EventParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant create
   */
  export type EventParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a EventParticipant.
     */
    data: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
  }

  /**
   * EventParticipant createMany
   */
  export type EventParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventParticipant createManyAndReturn
   */
  export type EventParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant update
   */
  export type EventParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a EventParticipant.
     */
    data: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
    /**
     * Choose, which EventParticipant to update.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant updateMany
   */
  export type EventParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
  }

  /**
   * EventParticipant updateManyAndReturn
   */
  export type EventParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant upsert
   */
  export type EventParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the EventParticipant to update in case it exists.
     */
    where: EventParticipantWhereUniqueInput
    /**
     * In case the EventParticipant found by the `where` argument doesn't exist, create a new EventParticipant with this data.
     */
    create: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
    /**
     * In case the EventParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
  }

  /**
   * EventParticipant delete
   */
  export type EventParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter which EventParticipant to delete.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant deleteMany
   */
  export type EventParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to delete
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to delete.
     */
    limit?: number
  }

  /**
   * EventParticipant without action
   */
  export type EventParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
  }


  /**
   * Model DeletedEventOccurrence
   */

  export type AggregateDeletedEventOccurrence = {
    _count: DeletedEventOccurrenceCountAggregateOutputType | null
    _min: DeletedEventOccurrenceMinAggregateOutputType | null
    _max: DeletedEventOccurrenceMaxAggregateOutputType | null
  }

  export type DeletedEventOccurrenceMinAggregateOutputType = {
    id: string | null
    parentEventId: string | null
    occurrenceDate: Date | null
    deletedAt: Date | null
  }

  export type DeletedEventOccurrenceMaxAggregateOutputType = {
    id: string | null
    parentEventId: string | null
    occurrenceDate: Date | null
    deletedAt: Date | null
  }

  export type DeletedEventOccurrenceCountAggregateOutputType = {
    id: number
    parentEventId: number
    occurrenceDate: number
    deletedAt: number
    _all: number
  }


  export type DeletedEventOccurrenceMinAggregateInputType = {
    id?: true
    parentEventId?: true
    occurrenceDate?: true
    deletedAt?: true
  }

  export type DeletedEventOccurrenceMaxAggregateInputType = {
    id?: true
    parentEventId?: true
    occurrenceDate?: true
    deletedAt?: true
  }

  export type DeletedEventOccurrenceCountAggregateInputType = {
    id?: true
    parentEventId?: true
    occurrenceDate?: true
    deletedAt?: true
    _all?: true
  }

  export type DeletedEventOccurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeletedEventOccurrence to aggregate.
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedEventOccurrences to fetch.
     */
    orderBy?: DeletedEventOccurrenceOrderByWithRelationInput | DeletedEventOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeletedEventOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedEventOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedEventOccurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeletedEventOccurrences
    **/
    _count?: true | DeletedEventOccurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeletedEventOccurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeletedEventOccurrenceMaxAggregateInputType
  }

  export type GetDeletedEventOccurrenceAggregateType<T extends DeletedEventOccurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateDeletedEventOccurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeletedEventOccurrence[P]>
      : GetScalarType<T[P], AggregateDeletedEventOccurrence[P]>
  }




  export type DeletedEventOccurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeletedEventOccurrenceWhereInput
    orderBy?: DeletedEventOccurrenceOrderByWithAggregationInput | DeletedEventOccurrenceOrderByWithAggregationInput[]
    by: DeletedEventOccurrenceScalarFieldEnum[] | DeletedEventOccurrenceScalarFieldEnum
    having?: DeletedEventOccurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeletedEventOccurrenceCountAggregateInputType | true
    _min?: DeletedEventOccurrenceMinAggregateInputType
    _max?: DeletedEventOccurrenceMaxAggregateInputType
  }

  export type DeletedEventOccurrenceGroupByOutputType = {
    id: string
    parentEventId: string
    occurrenceDate: Date
    deletedAt: Date
    _count: DeletedEventOccurrenceCountAggregateOutputType | null
    _min: DeletedEventOccurrenceMinAggregateOutputType | null
    _max: DeletedEventOccurrenceMaxAggregateOutputType | null
  }

  type GetDeletedEventOccurrenceGroupByPayload<T extends DeletedEventOccurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeletedEventOccurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeletedEventOccurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeletedEventOccurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], DeletedEventOccurrenceGroupByOutputType[P]>
        }
      >
    >


  export type DeletedEventOccurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentEventId?: boolean
    occurrenceDate?: boolean
    deletedAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deletedEventOccurrence"]>

  export type DeletedEventOccurrenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentEventId?: boolean
    occurrenceDate?: boolean
    deletedAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deletedEventOccurrence"]>

  export type DeletedEventOccurrenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentEventId?: boolean
    occurrenceDate?: boolean
    deletedAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deletedEventOccurrence"]>

  export type DeletedEventOccurrenceSelectScalar = {
    id?: boolean
    parentEventId?: boolean
    occurrenceDate?: boolean
    deletedAt?: boolean
  }

  export type DeletedEventOccurrenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentEventId" | "occurrenceDate" | "deletedAt", ExtArgs["result"]["deletedEventOccurrence"]>
  export type DeletedEventOccurrenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type DeletedEventOccurrenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type DeletedEventOccurrenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $DeletedEventOccurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeletedEventOccurrence"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentEventId: string
      occurrenceDate: Date
      deletedAt: Date
    }, ExtArgs["result"]["deletedEventOccurrence"]>
    composites: {}
  }

  type DeletedEventOccurrenceGetPayload<S extends boolean | null | undefined | DeletedEventOccurrenceDefaultArgs> = $Result.GetResult<Prisma.$DeletedEventOccurrencePayload, S>

  type DeletedEventOccurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeletedEventOccurrenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeletedEventOccurrenceCountAggregateInputType | true
    }

  export interface DeletedEventOccurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeletedEventOccurrence'], meta: { name: 'DeletedEventOccurrence' } }
    /**
     * Find zero or one DeletedEventOccurrence that matches the filter.
     * @param {DeletedEventOccurrenceFindUniqueArgs} args - Arguments to find a DeletedEventOccurrence
     * @example
     * // Get one DeletedEventOccurrence
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeletedEventOccurrenceFindUniqueArgs>(args: SelectSubset<T, DeletedEventOccurrenceFindUniqueArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeletedEventOccurrence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeletedEventOccurrenceFindUniqueOrThrowArgs} args - Arguments to find a DeletedEventOccurrence
     * @example
     * // Get one DeletedEventOccurrence
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeletedEventOccurrenceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeletedEventOccurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeletedEventOccurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceFindFirstArgs} args - Arguments to find a DeletedEventOccurrence
     * @example
     * // Get one DeletedEventOccurrence
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeletedEventOccurrenceFindFirstArgs>(args?: SelectSubset<T, DeletedEventOccurrenceFindFirstArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeletedEventOccurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceFindFirstOrThrowArgs} args - Arguments to find a DeletedEventOccurrence
     * @example
     * // Get one DeletedEventOccurrence
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeletedEventOccurrenceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeletedEventOccurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeletedEventOccurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeletedEventOccurrences
     * const deletedEventOccurrences = await prisma.deletedEventOccurrence.findMany()
     * 
     * // Get first 10 DeletedEventOccurrences
     * const deletedEventOccurrences = await prisma.deletedEventOccurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deletedEventOccurrenceWithIdOnly = await prisma.deletedEventOccurrence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeletedEventOccurrenceFindManyArgs>(args?: SelectSubset<T, DeletedEventOccurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeletedEventOccurrence.
     * @param {DeletedEventOccurrenceCreateArgs} args - Arguments to create a DeletedEventOccurrence.
     * @example
     * // Create one DeletedEventOccurrence
     * const DeletedEventOccurrence = await prisma.deletedEventOccurrence.create({
     *   data: {
     *     // ... data to create a DeletedEventOccurrence
     *   }
     * })
     * 
     */
    create<T extends DeletedEventOccurrenceCreateArgs>(args: SelectSubset<T, DeletedEventOccurrenceCreateArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeletedEventOccurrences.
     * @param {DeletedEventOccurrenceCreateManyArgs} args - Arguments to create many DeletedEventOccurrences.
     * @example
     * // Create many DeletedEventOccurrences
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeletedEventOccurrenceCreateManyArgs>(args?: SelectSubset<T, DeletedEventOccurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeletedEventOccurrences and returns the data saved in the database.
     * @param {DeletedEventOccurrenceCreateManyAndReturnArgs} args - Arguments to create many DeletedEventOccurrences.
     * @example
     * // Create many DeletedEventOccurrences
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeletedEventOccurrences and only return the `id`
     * const deletedEventOccurrenceWithIdOnly = await prisma.deletedEventOccurrence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeletedEventOccurrenceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeletedEventOccurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeletedEventOccurrence.
     * @param {DeletedEventOccurrenceDeleteArgs} args - Arguments to delete one DeletedEventOccurrence.
     * @example
     * // Delete one DeletedEventOccurrence
     * const DeletedEventOccurrence = await prisma.deletedEventOccurrence.delete({
     *   where: {
     *     // ... filter to delete one DeletedEventOccurrence
     *   }
     * })
     * 
     */
    delete<T extends DeletedEventOccurrenceDeleteArgs>(args: SelectSubset<T, DeletedEventOccurrenceDeleteArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeletedEventOccurrence.
     * @param {DeletedEventOccurrenceUpdateArgs} args - Arguments to update one DeletedEventOccurrence.
     * @example
     * // Update one DeletedEventOccurrence
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeletedEventOccurrenceUpdateArgs>(args: SelectSubset<T, DeletedEventOccurrenceUpdateArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeletedEventOccurrences.
     * @param {DeletedEventOccurrenceDeleteManyArgs} args - Arguments to filter DeletedEventOccurrences to delete.
     * @example
     * // Delete a few DeletedEventOccurrences
     * const { count } = await prisma.deletedEventOccurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeletedEventOccurrenceDeleteManyArgs>(args?: SelectSubset<T, DeletedEventOccurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeletedEventOccurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeletedEventOccurrences
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeletedEventOccurrenceUpdateManyArgs>(args: SelectSubset<T, DeletedEventOccurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeletedEventOccurrences and returns the data updated in the database.
     * @param {DeletedEventOccurrenceUpdateManyAndReturnArgs} args - Arguments to update many DeletedEventOccurrences.
     * @example
     * // Update many DeletedEventOccurrences
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeletedEventOccurrences and only return the `id`
     * const deletedEventOccurrenceWithIdOnly = await prisma.deletedEventOccurrence.updateManyAndReturn({
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
    updateManyAndReturn<T extends DeletedEventOccurrenceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeletedEventOccurrenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeletedEventOccurrence.
     * @param {DeletedEventOccurrenceUpsertArgs} args - Arguments to update or create a DeletedEventOccurrence.
     * @example
     * // Update or create a DeletedEventOccurrence
     * const deletedEventOccurrence = await prisma.deletedEventOccurrence.upsert({
     *   create: {
     *     // ... data to create a DeletedEventOccurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeletedEventOccurrence we want to update
     *   }
     * })
     */
    upsert<T extends DeletedEventOccurrenceUpsertArgs>(args: SelectSubset<T, DeletedEventOccurrenceUpsertArgs<ExtArgs>>): Prisma__DeletedEventOccurrenceClient<$Result.GetResult<Prisma.$DeletedEventOccurrencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeletedEventOccurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceCountArgs} args - Arguments to filter DeletedEventOccurrences to count.
     * @example
     * // Count the number of DeletedEventOccurrences
     * const count = await prisma.deletedEventOccurrence.count({
     *   where: {
     *     // ... the filter for the DeletedEventOccurrences we want to count
     *   }
     * })
    **/
    count<T extends DeletedEventOccurrenceCountArgs>(
      args?: Subset<T, DeletedEventOccurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeletedEventOccurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeletedEventOccurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeletedEventOccurrenceAggregateArgs>(args: Subset<T, DeletedEventOccurrenceAggregateArgs>): Prisma.PrismaPromise<GetDeletedEventOccurrenceAggregateType<T>>

    /**
     * Group by DeletedEventOccurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedEventOccurrenceGroupByArgs} args - Group by arguments.
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
      T extends DeletedEventOccurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeletedEventOccurrenceGroupByArgs['orderBy'] }
        : { orderBy?: DeletedEventOccurrenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeletedEventOccurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeletedEventOccurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeletedEventOccurrence model
   */
  readonly fields: DeletedEventOccurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeletedEventOccurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeletedEventOccurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeletedEventOccurrence model
   */
  interface DeletedEventOccurrenceFieldRefs {
    readonly id: FieldRef<"DeletedEventOccurrence", 'String'>
    readonly parentEventId: FieldRef<"DeletedEventOccurrence", 'String'>
    readonly occurrenceDate: FieldRef<"DeletedEventOccurrence", 'DateTime'>
    readonly deletedAt: FieldRef<"DeletedEventOccurrence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeletedEventOccurrence findUnique
   */
  export type DeletedEventOccurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which DeletedEventOccurrence to fetch.
     */
    where: DeletedEventOccurrenceWhereUniqueInput
  }

  /**
   * DeletedEventOccurrence findUniqueOrThrow
   */
  export type DeletedEventOccurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which DeletedEventOccurrence to fetch.
     */
    where: DeletedEventOccurrenceWhereUniqueInput
  }

  /**
   * DeletedEventOccurrence findFirst
   */
  export type DeletedEventOccurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which DeletedEventOccurrence to fetch.
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedEventOccurrences to fetch.
     */
    orderBy?: DeletedEventOccurrenceOrderByWithRelationInput | DeletedEventOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeletedEventOccurrences.
     */
    cursor?: DeletedEventOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedEventOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedEventOccurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeletedEventOccurrences.
     */
    distinct?: DeletedEventOccurrenceScalarFieldEnum | DeletedEventOccurrenceScalarFieldEnum[]
  }

  /**
   * DeletedEventOccurrence findFirstOrThrow
   */
  export type DeletedEventOccurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which DeletedEventOccurrence to fetch.
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedEventOccurrences to fetch.
     */
    orderBy?: DeletedEventOccurrenceOrderByWithRelationInput | DeletedEventOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeletedEventOccurrences.
     */
    cursor?: DeletedEventOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedEventOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedEventOccurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeletedEventOccurrences.
     */
    distinct?: DeletedEventOccurrenceScalarFieldEnum | DeletedEventOccurrenceScalarFieldEnum[]
  }

  /**
   * DeletedEventOccurrence findMany
   */
  export type DeletedEventOccurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * Filter, which DeletedEventOccurrences to fetch.
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedEventOccurrences to fetch.
     */
    orderBy?: DeletedEventOccurrenceOrderByWithRelationInput | DeletedEventOccurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeletedEventOccurrences.
     */
    cursor?: DeletedEventOccurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedEventOccurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedEventOccurrences.
     */
    skip?: number
    distinct?: DeletedEventOccurrenceScalarFieldEnum | DeletedEventOccurrenceScalarFieldEnum[]
  }

  /**
   * DeletedEventOccurrence create
   */
  export type DeletedEventOccurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * The data needed to create a DeletedEventOccurrence.
     */
    data: XOR<DeletedEventOccurrenceCreateInput, DeletedEventOccurrenceUncheckedCreateInput>
  }

  /**
   * DeletedEventOccurrence createMany
   */
  export type DeletedEventOccurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeletedEventOccurrences.
     */
    data: DeletedEventOccurrenceCreateManyInput | DeletedEventOccurrenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeletedEventOccurrence createManyAndReturn
   */
  export type DeletedEventOccurrenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * The data used to create many DeletedEventOccurrences.
     */
    data: DeletedEventOccurrenceCreateManyInput | DeletedEventOccurrenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeletedEventOccurrence update
   */
  export type DeletedEventOccurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * The data needed to update a DeletedEventOccurrence.
     */
    data: XOR<DeletedEventOccurrenceUpdateInput, DeletedEventOccurrenceUncheckedUpdateInput>
    /**
     * Choose, which DeletedEventOccurrence to update.
     */
    where: DeletedEventOccurrenceWhereUniqueInput
  }

  /**
   * DeletedEventOccurrence updateMany
   */
  export type DeletedEventOccurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeletedEventOccurrences.
     */
    data: XOR<DeletedEventOccurrenceUpdateManyMutationInput, DeletedEventOccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which DeletedEventOccurrences to update
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * Limit how many DeletedEventOccurrences to update.
     */
    limit?: number
  }

  /**
   * DeletedEventOccurrence updateManyAndReturn
   */
  export type DeletedEventOccurrenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * The data used to update DeletedEventOccurrences.
     */
    data: XOR<DeletedEventOccurrenceUpdateManyMutationInput, DeletedEventOccurrenceUncheckedUpdateManyInput>
    /**
     * Filter which DeletedEventOccurrences to update
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * Limit how many DeletedEventOccurrences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeletedEventOccurrence upsert
   */
  export type DeletedEventOccurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * The filter to search for the DeletedEventOccurrence to update in case it exists.
     */
    where: DeletedEventOccurrenceWhereUniqueInput
    /**
     * In case the DeletedEventOccurrence found by the `where` argument doesn't exist, create a new DeletedEventOccurrence with this data.
     */
    create: XOR<DeletedEventOccurrenceCreateInput, DeletedEventOccurrenceUncheckedCreateInput>
    /**
     * In case the DeletedEventOccurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeletedEventOccurrenceUpdateInput, DeletedEventOccurrenceUncheckedUpdateInput>
  }

  /**
   * DeletedEventOccurrence delete
   */
  export type DeletedEventOccurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
    /**
     * Filter which DeletedEventOccurrence to delete.
     */
    where: DeletedEventOccurrenceWhereUniqueInput
  }

  /**
   * DeletedEventOccurrence deleteMany
   */
  export type DeletedEventOccurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeletedEventOccurrences to delete
     */
    where?: DeletedEventOccurrenceWhereInput
    /**
     * Limit how many DeletedEventOccurrences to delete.
     */
    limit?: number
  }

  /**
   * DeletedEventOccurrence without action
   */
  export type DeletedEventOccurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedEventOccurrence
     */
    select?: DeletedEventOccurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedEventOccurrence
     */
    omit?: DeletedEventOccurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeletedEventOccurrenceInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    category: 'category',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdAt: 'createdAt',
    recurrence: 'recurrence',
    parentEventId: 'parentEventId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventParticipantScalarFieldEnum: {
    eventId: 'eventId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type EventParticipantScalarFieldEnum = (typeof EventParticipantScalarFieldEnum)[keyof typeof EventParticipantScalarFieldEnum]


  export const DeletedEventOccurrenceScalarFieldEnum: {
    id: 'id',
    parentEventId: 'parentEventId',
    occurrenceDate: 'occurrenceDate',
    deletedAt: 'deletedAt'
  };

  export type DeletedEventOccurrenceScalarFieldEnum = (typeof DeletedEventOccurrenceScalarFieldEnum)[keyof typeof DeletedEventOccurrenceScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Recurrence'
   */
  export type EnumRecurrenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recurrence'>
    


  /**
   * Reference to a field of type 'Recurrence[]'
   */
  export type ListEnumRecurrenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recurrence[]'>
    


  /**
   * Reference to a field of type 'ParticipantRole'
   */
  export type EnumParticipantRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantRole'>
    


  /**
   * Reference to a field of type 'ParticipantRole[]'
   */
  export type ListEnumParticipantRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantRole[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    EventParticipant?: EventParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    EventParticipant?: EventParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    EventParticipant?: EventParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    ownerId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    category?: StringFilter<"Event"> | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    endsAt?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    recurrence?: EnumRecurrenceFilter<"Event"> | $Enums.Recurrence
    parentEventId?: StringNullableFilter<"Event"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    EventParticipant?: EventParticipantListRelationFilter
    DeletedEventOccurrence?: DeletedEventOccurrenceListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    recurrence?: SortOrder
    parentEventId?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    EventParticipant?: EventParticipantOrderByRelationAggregateInput
    DeletedEventOccurrence?: DeletedEventOccurrenceOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    ownerId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    category?: StringFilter<"Event"> | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    endsAt?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    recurrence?: EnumRecurrenceFilter<"Event"> | $Enums.Recurrence
    parentEventId?: StringNullableFilter<"Event"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    EventParticipant?: EventParticipantListRelationFilter
    DeletedEventOccurrence?: DeletedEventOccurrenceListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    recurrence?: SortOrder
    parentEventId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    ownerId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    category?: StringWithAggregatesFilter<"Event"> | string
    startsAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    recurrence?: EnumRecurrenceWithAggregatesFilter<"Event"> | $Enums.Recurrence
    parentEventId?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type EventParticipantWhereInput = {
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    role?: EnumParticipantRoleFilter<"EventParticipant"> | $Enums.ParticipantRole
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventParticipantOrderByWithRelationInput = {
    eventId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    Event?: EventOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type EventParticipantWhereUniqueInput = Prisma.AtLeast<{
    eventId_userId?: EventParticipantEventIdUserIdCompoundUniqueInput
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    role?: EnumParticipantRoleFilter<"EventParticipant"> | $Enums.ParticipantRole
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "eventId_userId">

  export type EventParticipantOrderByWithAggregationInput = {
    eventId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: EventParticipantCountOrderByAggregateInput
    _max?: EventParticipantMaxOrderByAggregateInput
    _min?: EventParticipantMinOrderByAggregateInput
  }

  export type EventParticipantScalarWhereWithAggregatesInput = {
    AND?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    OR?: EventParticipantScalarWhereWithAggregatesInput[]
    NOT?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"EventParticipant"> | string
    userId?: StringWithAggregatesFilter<"EventParticipant"> | string
    role?: EnumParticipantRoleWithAggregatesFilter<"EventParticipant"> | $Enums.ParticipantRole
    createdAt?: DateTimeWithAggregatesFilter<"EventParticipant"> | Date | string
  }

  export type DeletedEventOccurrenceWhereInput = {
    AND?: DeletedEventOccurrenceWhereInput | DeletedEventOccurrenceWhereInput[]
    OR?: DeletedEventOccurrenceWhereInput[]
    NOT?: DeletedEventOccurrenceWhereInput | DeletedEventOccurrenceWhereInput[]
    id?: StringFilter<"DeletedEventOccurrence"> | string
    parentEventId?: StringFilter<"DeletedEventOccurrence"> | string
    occurrenceDate?: DateTimeFilter<"DeletedEventOccurrence"> | Date | string
    deletedAt?: DateTimeFilter<"DeletedEventOccurrence"> | Date | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type DeletedEventOccurrenceOrderByWithRelationInput = {
    id?: SortOrder
    parentEventId?: SortOrder
    occurrenceDate?: SortOrder
    deletedAt?: SortOrder
    Event?: EventOrderByWithRelationInput
  }

  export type DeletedEventOccurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    parentEventId_occurrenceDate?: DeletedEventOccurrenceParentEventIdOccurrenceDateCompoundUniqueInput
    AND?: DeletedEventOccurrenceWhereInput | DeletedEventOccurrenceWhereInput[]
    OR?: DeletedEventOccurrenceWhereInput[]
    NOT?: DeletedEventOccurrenceWhereInput | DeletedEventOccurrenceWhereInput[]
    parentEventId?: StringFilter<"DeletedEventOccurrence"> | string
    occurrenceDate?: DateTimeFilter<"DeletedEventOccurrence"> | Date | string
    deletedAt?: DateTimeFilter<"DeletedEventOccurrence"> | Date | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "parentEventId_occurrenceDate">

  export type DeletedEventOccurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    parentEventId?: SortOrder
    occurrenceDate?: SortOrder
    deletedAt?: SortOrder
    _count?: DeletedEventOccurrenceCountOrderByAggregateInput
    _max?: DeletedEventOccurrenceMaxOrderByAggregateInput
    _min?: DeletedEventOccurrenceMinOrderByAggregateInput
  }

  export type DeletedEventOccurrenceScalarWhereWithAggregatesInput = {
    AND?: DeletedEventOccurrenceScalarWhereWithAggregatesInput | DeletedEventOccurrenceScalarWhereWithAggregatesInput[]
    OR?: DeletedEventOccurrenceScalarWhereWithAggregatesInput[]
    NOT?: DeletedEventOccurrenceScalarWhereWithAggregatesInput | DeletedEventOccurrenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeletedEventOccurrence"> | string
    parentEventId?: StringWithAggregatesFilter<"DeletedEventOccurrence"> | string
    occurrenceDate?: DateTimeWithAggregatesFilter<"DeletedEventOccurrence"> | Date | string
    deletedAt?: DateTimeWithAggregatesFilter<"DeletedEventOccurrence"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    events?: EventCreateNestedManyWithoutOwnerInput
    EventParticipant?: EventParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
    EventParticipant?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOwnerNestedInput
    EventParticipant?: EventParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
    EventParticipant?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    owner: UserCreateNestedOneWithoutEventsInput
    EventParticipant?: EventParticipantCreateNestedManyWithoutEventInput
    DeletedEventOccurrence?: DeletedEventOccurrenceCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    EventParticipant?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    EventParticipant?: EventParticipantUpdateManyWithoutEventNestedInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    EventParticipant?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventParticipantCreateInput = {
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutEventParticipantInput
    User: UserCreateNestedOneWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateInput = {
    eventId: string
    userId: string
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
  }

  export type EventParticipantUpdateInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventParticipantNestedInput
    User?: UserUpdateOneRequiredWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateManyInput = {
    eventId: string
    userId: string
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
  }

  export type EventParticipantUpdateManyMutationInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedEventOccurrenceCreateInput = {
    id?: string
    occurrenceDate: Date | string
    deletedAt?: Date | string
    Event: EventCreateNestedOneWithoutDeletedEventOccurrenceInput
  }

  export type DeletedEventOccurrenceUncheckedCreateInput = {
    id?: string
    parentEventId: string
    occurrenceDate: Date | string
    deletedAt?: Date | string
  }

  export type DeletedEventOccurrenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutDeletedEventOccurrenceNestedInput
  }

  export type DeletedEventOccurrenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentEventId?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedEventOccurrenceCreateManyInput = {
    id?: string
    parentEventId: string
    occurrenceDate: Date | string
    deletedAt?: Date | string
  }

  export type DeletedEventOccurrenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedEventOccurrenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentEventId?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventParticipantListRelationFilter = {
    every?: EventParticipantWhereInput
    some?: EventParticipantWhereInput
    none?: EventParticipantWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRecurrenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrence | EnumRecurrenceFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceFilter<$PrismaModel> | $Enums.Recurrence
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeletedEventOccurrenceListRelationFilter = {
    every?: DeletedEventOccurrenceWhereInput
    some?: DeletedEventOccurrenceWhereInput
    none?: DeletedEventOccurrenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeletedEventOccurrenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    recurrence?: SortOrder
    parentEventId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    recurrence?: SortOrder
    parentEventId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    recurrence?: SortOrder
    parentEventId?: SortOrder
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

  export type EnumRecurrenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrence | EnumRecurrenceFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceWithAggregatesFilter<$PrismaModel> | $Enums.Recurrence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurrenceFilter<$PrismaModel>
    _max?: NestedEnumRecurrenceFilter<$PrismaModel>
  }

  export type EnumParticipantRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleFilter<$PrismaModel> | $Enums.ParticipantRole
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventParticipantEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventParticipantCountOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EventParticipantMaxOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EventParticipantMinOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumParticipantRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantRoleFilter<$PrismaModel>
    _max?: NestedEnumParticipantRoleFilter<$PrismaModel>
  }

  export type DeletedEventOccurrenceParentEventIdOccurrenceDateCompoundUniqueInput = {
    parentEventId: string
    occurrenceDate: Date | string
  }

  export type DeletedEventOccurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    parentEventId?: SortOrder
    occurrenceDate?: SortOrder
    deletedAt?: SortOrder
  }

  export type DeletedEventOccurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    parentEventId?: SortOrder
    occurrenceDate?: SortOrder
    deletedAt?: SortOrder
  }

  export type DeletedEventOccurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    parentEventId?: SortOrder
    occurrenceDate?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutUserInput | EventParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutUserInput | EventParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutUserInput | EventParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutUserInput | EventParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutUserInput | EventParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutUserInput | EventParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventParticipantCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type DeletedEventOccurrenceCreateNestedManyWithoutEventInput = {
    create?: XOR<DeletedEventOccurrenceCreateWithoutEventInput, DeletedEventOccurrenceUncheckedCreateWithoutEventInput> | DeletedEventOccurrenceCreateWithoutEventInput[] | DeletedEventOccurrenceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeletedEventOccurrenceCreateOrConnectWithoutEventInput | DeletedEventOccurrenceCreateOrConnectWithoutEventInput[]
    createMany?: DeletedEventOccurrenceCreateManyEventInputEnvelope
    connect?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type DeletedEventOccurrenceUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<DeletedEventOccurrenceCreateWithoutEventInput, DeletedEventOccurrenceUncheckedCreateWithoutEventInput> | DeletedEventOccurrenceCreateWithoutEventInput[] | DeletedEventOccurrenceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeletedEventOccurrenceCreateOrConnectWithoutEventInput | DeletedEventOccurrenceCreateOrConnectWithoutEventInput[]
    createMany?: DeletedEventOccurrenceCreateManyEventInputEnvelope
    connect?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRecurrenceFieldUpdateOperationsInput = {
    set?: $Enums.Recurrence
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventParticipantUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type DeletedEventOccurrenceUpdateManyWithoutEventNestedInput = {
    create?: XOR<DeletedEventOccurrenceCreateWithoutEventInput, DeletedEventOccurrenceUncheckedCreateWithoutEventInput> | DeletedEventOccurrenceCreateWithoutEventInput[] | DeletedEventOccurrenceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeletedEventOccurrenceCreateOrConnectWithoutEventInput | DeletedEventOccurrenceCreateOrConnectWithoutEventInput[]
    upsert?: DeletedEventOccurrenceUpsertWithWhereUniqueWithoutEventInput | DeletedEventOccurrenceUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DeletedEventOccurrenceCreateManyEventInputEnvelope
    set?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    disconnect?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    delete?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    connect?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    update?: DeletedEventOccurrenceUpdateWithWhereUniqueWithoutEventInput | DeletedEventOccurrenceUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DeletedEventOccurrenceUpdateManyWithWhereWithoutEventInput | DeletedEventOccurrenceUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DeletedEventOccurrenceScalarWhereInput | DeletedEventOccurrenceScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type DeletedEventOccurrenceUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<DeletedEventOccurrenceCreateWithoutEventInput, DeletedEventOccurrenceUncheckedCreateWithoutEventInput> | DeletedEventOccurrenceCreateWithoutEventInput[] | DeletedEventOccurrenceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeletedEventOccurrenceCreateOrConnectWithoutEventInput | DeletedEventOccurrenceCreateOrConnectWithoutEventInput[]
    upsert?: DeletedEventOccurrenceUpsertWithWhereUniqueWithoutEventInput | DeletedEventOccurrenceUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DeletedEventOccurrenceCreateManyEventInputEnvelope
    set?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    disconnect?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    delete?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    connect?: DeletedEventOccurrenceWhereUniqueInput | DeletedEventOccurrenceWhereUniqueInput[]
    update?: DeletedEventOccurrenceUpdateWithWhereUniqueWithoutEventInput | DeletedEventOccurrenceUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DeletedEventOccurrenceUpdateManyWithWhereWithoutEventInput | DeletedEventOccurrenceUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DeletedEventOccurrenceScalarWhereInput | DeletedEventOccurrenceScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventParticipantInput = {
    create?: XOR<EventCreateWithoutEventParticipantInput, EventUncheckedCreateWithoutEventParticipantInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventParticipantInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventParticipantInput = {
    create?: XOR<UserCreateWithoutEventParticipantInput, UserUncheckedCreateWithoutEventParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventParticipantInput
    connect?: UserWhereUniqueInput
  }

  export type EnumParticipantRoleFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantRole
  }

  export type EventUpdateOneRequiredWithoutEventParticipantNestedInput = {
    create?: XOR<EventCreateWithoutEventParticipantInput, EventUncheckedCreateWithoutEventParticipantInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventParticipantInput
    upsert?: EventUpsertWithoutEventParticipantInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventParticipantInput, EventUpdateWithoutEventParticipantInput>, EventUncheckedUpdateWithoutEventParticipantInput>
  }

  export type UserUpdateOneRequiredWithoutEventParticipantNestedInput = {
    create?: XOR<UserCreateWithoutEventParticipantInput, UserUncheckedCreateWithoutEventParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventParticipantInput
    upsert?: UserUpsertWithoutEventParticipantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventParticipantInput, UserUpdateWithoutEventParticipantInput>, UserUncheckedUpdateWithoutEventParticipantInput>
  }

  export type EventCreateNestedOneWithoutDeletedEventOccurrenceInput = {
    create?: XOR<EventCreateWithoutDeletedEventOccurrenceInput, EventUncheckedCreateWithoutDeletedEventOccurrenceInput>
    connectOrCreate?: EventCreateOrConnectWithoutDeletedEventOccurrenceInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutDeletedEventOccurrenceNestedInput = {
    create?: XOR<EventCreateWithoutDeletedEventOccurrenceInput, EventUncheckedCreateWithoutDeletedEventOccurrenceInput>
    connectOrCreate?: EventCreateOrConnectWithoutDeletedEventOccurrenceInput
    upsert?: EventUpsertWithoutDeletedEventOccurrenceInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutDeletedEventOccurrenceInput, EventUpdateWithoutDeletedEventOccurrenceInput>, EventUncheckedUpdateWithoutDeletedEventOccurrenceInput>
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

  export type NestedEnumRecurrenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrence | EnumRecurrenceFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceFilter<$PrismaModel> | $Enums.Recurrence
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

  export type NestedEnumRecurrenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrence | EnumRecurrenceFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrence[] | ListEnumRecurrenceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrenceWithAggregatesFilter<$PrismaModel> | $Enums.Recurrence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurrenceFilter<$PrismaModel>
    _max?: NestedEnumRecurrenceFilter<$PrismaModel>
  }

  export type NestedEnumParticipantRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleFilter<$PrismaModel> | $Enums.ParticipantRole
  }

  export type NestedEnumParticipantRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantRoleFilter<$PrismaModel>
    _max?: NestedEnumParticipantRoleFilter<$PrismaModel>
  }

  export type EventCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    EventParticipant?: EventParticipantCreateNestedManyWithoutEventInput
    DeletedEventOccurrence?: DeletedEventOccurrenceCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    EventParticipant?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOwnerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventCreateManyOwnerInputEnvelope = {
    data: EventCreateManyOwnerInput | EventCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantCreateWithoutUserInput = {
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutUserInput = {
    eventId: string
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
  }

  export type EventParticipantCreateOrConnectWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput>
  }

  export type EventParticipantCreateManyUserInputEnvelope = {
    data: EventParticipantCreateManyUserInput | EventParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
  }

  export type EventUpdateManyWithWhereWithoutOwnerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    ownerId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    category?: StringFilter<"Event"> | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    endsAt?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    recurrence?: EnumRecurrenceFilter<"Event"> | $Enums.Recurrence
    parentEventId?: StringNullableFilter<"Event"> | string | null
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutUserInput, EventParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutUserInput, EventParticipantUncheckedUpdateWithoutUserInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutUserInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type EventParticipantScalarWhereInput = {
    AND?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    OR?: EventParticipantScalarWhereInput[]
    NOT?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    role?: EnumParticipantRoleFilter<"EventParticipant"> | $Enums.ParticipantRole
    createdAt?: DateTimeFilter<"EventParticipant"> | Date | string
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    EventParticipant?: EventParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    EventParticipant?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventParticipantCreateWithoutEventInput = {
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventParticipantInput
  }

  export type EventParticipantUncheckedCreateWithoutEventInput = {
    userId: string
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
  }

  export type EventParticipantCreateOrConnectWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantCreateManyEventInputEnvelope = {
    data: EventParticipantCreateManyEventInput | EventParticipantCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type DeletedEventOccurrenceCreateWithoutEventInput = {
    id?: string
    occurrenceDate: Date | string
    deletedAt?: Date | string
  }

  export type DeletedEventOccurrenceUncheckedCreateWithoutEventInput = {
    id?: string
    occurrenceDate: Date | string
    deletedAt?: Date | string
  }

  export type DeletedEventOccurrenceCreateOrConnectWithoutEventInput = {
    where: DeletedEventOccurrenceWhereUniqueInput
    create: XOR<DeletedEventOccurrenceCreateWithoutEventInput, DeletedEventOccurrenceUncheckedCreateWithoutEventInput>
  }

  export type DeletedEventOccurrenceCreateManyEventInputEnvelope = {
    data: DeletedEventOccurrenceCreateManyEventInput | DeletedEventOccurrenceCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventParticipant?: EventParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventParticipant?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutEventInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutEventInput>
  }

  export type DeletedEventOccurrenceUpsertWithWhereUniqueWithoutEventInput = {
    where: DeletedEventOccurrenceWhereUniqueInput
    update: XOR<DeletedEventOccurrenceUpdateWithoutEventInput, DeletedEventOccurrenceUncheckedUpdateWithoutEventInput>
    create: XOR<DeletedEventOccurrenceCreateWithoutEventInput, DeletedEventOccurrenceUncheckedCreateWithoutEventInput>
  }

  export type DeletedEventOccurrenceUpdateWithWhereUniqueWithoutEventInput = {
    where: DeletedEventOccurrenceWhereUniqueInput
    data: XOR<DeletedEventOccurrenceUpdateWithoutEventInput, DeletedEventOccurrenceUncheckedUpdateWithoutEventInput>
  }

  export type DeletedEventOccurrenceUpdateManyWithWhereWithoutEventInput = {
    where: DeletedEventOccurrenceScalarWhereInput
    data: XOR<DeletedEventOccurrenceUpdateManyMutationInput, DeletedEventOccurrenceUncheckedUpdateManyWithoutEventInput>
  }

  export type DeletedEventOccurrenceScalarWhereInput = {
    AND?: DeletedEventOccurrenceScalarWhereInput | DeletedEventOccurrenceScalarWhereInput[]
    OR?: DeletedEventOccurrenceScalarWhereInput[]
    NOT?: DeletedEventOccurrenceScalarWhereInput | DeletedEventOccurrenceScalarWhereInput[]
    id?: StringFilter<"DeletedEventOccurrence"> | string
    parentEventId?: StringFilter<"DeletedEventOccurrence"> | string
    occurrenceDate?: DateTimeFilter<"DeletedEventOccurrence"> | Date | string
    deletedAt?: DateTimeFilter<"DeletedEventOccurrence"> | Date | string
  }

  export type EventCreateWithoutEventParticipantInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    owner: UserCreateNestedOneWithoutEventsInput
    DeletedEventOccurrence?: DeletedEventOccurrenceCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventParticipantInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    DeletedEventOccurrence?: DeletedEventOccurrenceUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventParticipantInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventParticipantInput, EventUncheckedCreateWithoutEventParticipantInput>
  }

  export type UserCreateWithoutEventParticipantInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    events?: EventCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutEventParticipantInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutEventParticipantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventParticipantInput, UserUncheckedCreateWithoutEventParticipantInput>
  }

  export type EventUpsertWithoutEventParticipantInput = {
    update: XOR<EventUpdateWithoutEventParticipantInput, EventUncheckedUpdateWithoutEventParticipantInput>
    create: XOR<EventCreateWithoutEventParticipantInput, EventUncheckedCreateWithoutEventParticipantInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventParticipantInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventParticipantInput, EventUncheckedUpdateWithoutEventParticipantInput>
  }

  export type EventUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    DeletedEventOccurrence?: DeletedEventOccurrenceUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutEventParticipantInput = {
    update: XOR<UserUpdateWithoutEventParticipantInput, UserUncheckedUpdateWithoutEventParticipantInput>
    create: XOR<UserCreateWithoutEventParticipantInput, UserUncheckedCreateWithoutEventParticipantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventParticipantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventParticipantInput, UserUncheckedUpdateWithoutEventParticipantInput>
  }

  export type UserUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutEventParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type EventCreateWithoutDeletedEventOccurrenceInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    owner: UserCreateNestedOneWithoutEventsInput
    EventParticipant?: EventParticipantCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutDeletedEventOccurrenceInput = {
    id?: string
    ownerId: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
    EventParticipant?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutDeletedEventOccurrenceInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDeletedEventOccurrenceInput, EventUncheckedCreateWithoutDeletedEventOccurrenceInput>
  }

  export type EventUpsertWithoutDeletedEventOccurrenceInput = {
    update: XOR<EventUpdateWithoutDeletedEventOccurrenceInput, EventUncheckedUpdateWithoutDeletedEventOccurrenceInput>
    create: XOR<EventCreateWithoutDeletedEventOccurrenceInput, EventUncheckedCreateWithoutDeletedEventOccurrenceInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutDeletedEventOccurrenceInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutDeletedEventOccurrenceInput, EventUncheckedUpdateWithoutDeletedEventOccurrenceInput>
  }

  export type EventUpdateWithoutDeletedEventOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    EventParticipant?: EventParticipantUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutDeletedEventOccurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    EventParticipant?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    category: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    recurrence?: $Enums.Recurrence
    parentEventId?: string | null
  }

  export type EventParticipantCreateManyUserInput = {
    eventId: string
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
  }

  export type EventUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    EventParticipant?: EventParticipantUpdateManyWithoutEventNestedInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
    EventParticipant?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
    DeletedEventOccurrence?: DeletedEventOccurrenceUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recurrence?: EnumRecurrenceFieldUpdateOperationsInput | $Enums.Recurrence
    parentEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventParticipantUpdateWithoutUserInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateManyEventInput = {
    userId: string
    role?: $Enums.ParticipantRole
    createdAt?: Date | string
  }

  export type DeletedEventOccurrenceCreateManyEventInput = {
    id?: string
    occurrenceDate: Date | string
    deletedAt?: Date | string
  }

  export type EventParticipantUpdateWithoutEventInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventParticipantNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedEventOccurrenceUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedEventOccurrenceUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedEventOccurrenceUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    occurrenceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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