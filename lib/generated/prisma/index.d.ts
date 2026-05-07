
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model EscalationLog
 * 
 */
export type EscalationLog = $Result.DefaultSelection<Prisma.$EscalationLogPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model intent_logs
 * 
 */
export type intent_logs = $Result.DefaultSelection<Prisma.$intent_logsPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model token_logs
 * 
 */
export type token_logs = $Result.DefaultSelection<Prisma.$token_logsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeadStatus: {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  QUALIFIED: 'QUALIFIED',
  READY_TO_PAY: 'READY_TO_PAY',
  CONVERTED: 'CONVERTED',
  LOST: 'LOST'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const AgentRole: {
  ADMIN: 'ADMIN',
  AGENT: 'AGENT'
};

export type AgentRole = (typeof AgentRole)[keyof typeof AgentRole]


export const MessageRole: {
  USER: 'USER',
  AI: 'AI',
  AGENT: 'AGENT'
};

export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type AgentRole = $Enums.AgentRole

export const AgentRole: typeof $Enums.AgentRole

export type MessageRole = $Enums.MessageRole

export const MessageRole: typeof $Enums.MessageRole

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Leads
 * const leads = await prisma.lead.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Leads
   * const leads = await prisma.lead.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escalationLog`: Exposes CRUD operations for the **EscalationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EscalationLogs
    * const escalationLogs = await prisma.escalationLog.findMany()
    * ```
    */
  get escalationLog(): Prisma.EscalationLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intent_logs`: Exposes CRUD operations for the **intent_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intent_logs
    * const intent_logs = await prisma.intent_logs.findMany()
    * ```
    */
  get intent_logs(): Prisma.intent_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token_logs`: Exposes CRUD operations for the **token_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Token_logs
    * const token_logs = await prisma.token_logs.findMany()
    * ```
    */
  get token_logs(): Prisma.token_logsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Lead: 'Lead',
    Agent: 'Agent',
    Conversation: 'Conversation',
    Message: 'Message',
    Payment: 'Payment',
    EscalationLog: 'EscalationLog',
    conversations: 'conversations',
    intent_logs: 'intent_logs',
    messages: 'messages',
    token_logs: 'token_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "lead" | "agent" | "conversation" | "message" | "payment" | "escalationLog" | "conversations" | "intent_logs" | "messages" | "token_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      EscalationLog: {
        payload: Prisma.$EscalationLogPayload<ExtArgs>
        fields: Prisma.EscalationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscalationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscalationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>
          }
          findFirst: {
            args: Prisma.EscalationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscalationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>
          }
          findMany: {
            args: Prisma.EscalationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>[]
          }
          create: {
            args: Prisma.EscalationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>
          }
          createMany: {
            args: Prisma.EscalationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscalationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>[]
          }
          delete: {
            args: Prisma.EscalationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>
          }
          update: {
            args: Prisma.EscalationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>
          }
          deleteMany: {
            args: Prisma.EscalationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscalationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscalationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>[]
          }
          upsert: {
            args: Prisma.EscalationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationLogPayload>
          }
          aggregate: {
            args: Prisma.EscalationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscalationLog>
          }
          groupBy: {
            args: Prisma.EscalationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscalationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscalationLogCountArgs<ExtArgs>
            result: $Utils.Optional<EscalationLogCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      intent_logs: {
        payload: Prisma.$intent_logsPayload<ExtArgs>
        fields: Prisma.intent_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.intent_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.intent_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>
          }
          findFirst: {
            args: Prisma.intent_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.intent_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>
          }
          findMany: {
            args: Prisma.intent_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>[]
          }
          create: {
            args: Prisma.intent_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>
          }
          createMany: {
            args: Prisma.intent_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.intent_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>[]
          }
          delete: {
            args: Prisma.intent_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>
          }
          update: {
            args: Prisma.intent_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>
          }
          deleteMany: {
            args: Prisma.intent_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.intent_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.intent_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>[]
          }
          upsert: {
            args: Prisma.intent_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intent_logsPayload>
          }
          aggregate: {
            args: Prisma.Intent_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntent_logs>
          }
          groupBy: {
            args: Prisma.intent_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Intent_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.intent_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Intent_logsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      token_logs: {
        payload: Prisma.$token_logsPayload<ExtArgs>
        fields: Prisma.token_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.token_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.token_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>
          }
          findFirst: {
            args: Prisma.token_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.token_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>
          }
          findMany: {
            args: Prisma.token_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>[]
          }
          create: {
            args: Prisma.token_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>
          }
          createMany: {
            args: Prisma.token_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.token_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>[]
          }
          delete: {
            args: Prisma.token_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>
          }
          update: {
            args: Prisma.token_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>
          }
          deleteMany: {
            args: Prisma.token_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.token_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.token_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>[]
          }
          upsert: {
            args: Prisma.token_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_logsPayload>
          }
          aggregate: {
            args: Prisma.Token_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken_logs>
          }
          groupBy: {
            args: Prisma.token_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Token_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.token_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Token_logsCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    lead?: LeadOmit
    agent?: AgentOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    payment?: PaymentOmit
    escalationLog?: EscalationLogOmit
    conversations?: conversationsOmit
    intent_logs?: intent_logsOmit
    messages?: messagesOmit
    token_logs?: token_logsOmit
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
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    conversations: number
    escalations: number
    payments: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | LeadCountOutputTypeCountConversationsArgs
    escalations?: boolean | LeadCountOutputTypeCountEscalationsArgs
    payments?: boolean | LeadCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountEscalationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscalationLogWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    conversations: number
    escalations: number
    leads: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | AgentCountOutputTypeCountConversationsArgs
    escalations?: boolean | AgentCountOutputTypeCountEscalationsArgs
    leads?: boolean | AgentCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountEscalationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscalationLogWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    id: number | null
    assignedAgentId: number | null
  }

  export type LeadSumAggregateOutputType = {
    id: number | null
    assignedAgentId: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    assignedAgentId: number | null
    platform: string | null
    sourceId: string | null
    status: $Enums.LeadStatus | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    assignedAgentId: number | null
    platform: string | null
    sourceId: string | null
    status: $Enums.LeadStatus | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    assignedAgentId: number
    platform: number
    sourceId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    id?: true
    assignedAgentId?: true
  }

  export type LeadSumAggregateInputType = {
    id?: true
    assignedAgentId?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    assignedAgentId?: true
    platform?: true
    sourceId?: true
    status?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    assignedAgentId?: true
    platform?: true
    sourceId?: true
    status?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    assignedAgentId?: true
    platform?: true
    sourceId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: number
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date
    assignedAgentId: number | null
    platform: string
    sourceId: string
    status: $Enums.LeadStatus
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    assignedAgentId?: boolean
    platform?: boolean
    sourceId?: boolean
    status?: boolean
    updatedAt?: boolean
    conversations?: boolean | Lead$conversationsArgs<ExtArgs>
    escalations?: boolean | Lead$escalationsArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
    payments?: boolean | Lead$paymentsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    assignedAgentId?: boolean
    platform?: boolean
    sourceId?: boolean
    status?: boolean
    updatedAt?: boolean
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    assignedAgentId?: boolean
    platform?: boolean
    sourceId?: boolean
    status?: boolean
    updatedAt?: boolean
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    assignedAgentId?: boolean
    platform?: boolean
    sourceId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "assignedAgentId" | "platform" | "sourceId" | "status" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Lead$conversationsArgs<ExtArgs>
    escalations?: boolean | Lead$escalationsArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
    payments?: boolean | Lead$paymentsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      escalations: Prisma.$EscalationLogPayload<ExtArgs>[]
      agent: Prisma.$AgentPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string | null
      phone: string | null
      createdAt: Date
      assignedAgentId: number | null
      platform: string
      sourceId: string
      status: $Enums.LeadStatus
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends Lead$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    escalations<T extends Lead$escalationsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$escalationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agent<T extends Lead$agentArgs<ExtArgs> = {}>(args?: Subset<T, Lead$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Lead$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'Int'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly assignedAgentId: FieldRef<"Lead", 'Int'>
    readonly platform: FieldRef<"Lead", 'String'>
    readonly sourceId: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.conversations
   */
  export type Lead$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Lead.escalations
   */
  export type Lead$escalationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    where?: EscalationLogWhereInput
    orderBy?: EscalationLogOrderByWithRelationInput | EscalationLogOrderByWithRelationInput[]
    cursor?: EscalationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EscalationLogScalarFieldEnum | EscalationLogScalarFieldEnum[]
  }

  /**
   * Lead.agent
   */
  export type Lead$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * Lead.payments
   */
  export type Lead$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    id: number | null
  }

  export type AgentSumAggregateOutputType = {
    id: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    email: string | null
    isOnline: boolean | null
    passwordHash: string | null
    role: $Enums.AgentRole | null
  }

  export type AgentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    email: string | null
    isOnline: boolean | null
    passwordHash: string | null
    role: $Enums.AgentRole | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    email: number
    isOnline: number
    passwordHash: number
    role: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    id?: true
  }

  export type AgentSumAggregateInputType = {
    id?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    email?: true
    isOnline?: true
    passwordHash?: true
    role?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    email?: true
    isOnline?: true
    passwordHash?: true
    role?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    email?: true
    isOnline?: true
    passwordHash?: true
    role?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    email: string
    isOnline: boolean
    passwordHash: string
    role: $Enums.AgentRole
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    email?: boolean
    isOnline?: boolean
    passwordHash?: boolean
    role?: boolean
    conversations?: boolean | Agent$conversationsArgs<ExtArgs>
    escalations?: boolean | Agent$escalationsArgs<ExtArgs>
    leads?: boolean | Agent$leadsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    email?: boolean
    isOnline?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    email?: boolean
    isOnline?: boolean
    passwordHash?: boolean
    role?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    email?: boolean
    isOnline?: boolean
    passwordHash?: boolean
    role?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "email" | "isOnline" | "passwordHash" | "role", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Agent$conversationsArgs<ExtArgs>
    escalations?: boolean | Agent$escalationsArgs<ExtArgs>
    leads?: boolean | Agent$leadsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      escalations: Prisma.$EscalationLogPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      email: string
      isOnline: boolean
      passwordHash: string
      role: $Enums.AgentRole
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends Agent$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    escalations<T extends Agent$escalationsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$escalationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Agent$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'Int'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly email: FieldRef<"Agent", 'String'>
    readonly isOnline: FieldRef<"Agent", 'Boolean'>
    readonly passwordHash: FieldRef<"Agent", 'String'>
    readonly role: FieldRef<"Agent", 'AgentRole'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.conversations
   */
  export type Agent$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Agent.escalations
   */
  export type Agent$escalationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    where?: EscalationLogWhereInput
    orderBy?: EscalationLogOrderByWithRelationInput | EscalationLogOrderByWithRelationInput[]
    cursor?: EscalationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EscalationLogScalarFieldEnum | EscalationLogScalarFieldEnum[]
  }

  /**
   * Agent.leads
   */
  export type Agent$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
    status: string | null
    createdAt: Date | null
    platform: string | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
    status: string | null
    createdAt: Date | null
    platform: string | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    leadId: number
    agentId: number
    status: number
    createdAt: number
    platform: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    status?: true
    createdAt?: true
    platform?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    status?: true
    createdAt?: true
    platform?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    status?: true
    createdAt?: true
    platform?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    leadId: number
    agentId: number | null
    status: string
    createdAt: Date
    platform: string
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean
    agent?: boolean | Conversation$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean
    agent?: boolean | Conversation$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean
    agent?: boolean | Conversation$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    status?: boolean
    createdAt?: boolean
    platform?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "agentId" | "status" | "createdAt" | "platform", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Conversation$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Conversation$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | Conversation$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs> | null
      lead: Prisma.$LeadPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leadId: number
      agentId: number | null
      status: string
      createdAt: Date
      platform: string
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends Conversation$agentArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly leadId: FieldRef<"Conversation", 'Int'>
    readonly agentId: FieldRef<"Conversation", 'Int'>
    readonly status: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly platform: FieldRef<"Conversation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.agent
   */
  export type Conversation$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
    confidence: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
    confidence: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    conversationId: number | null
    content: string | null
    createdAt: Date | null
    confidence: number | null
    intent: string | null
    role: $Enums.MessageRole | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    conversationId: number | null
    content: string | null
    createdAt: Date | null
    confidence: number | null
    intent: string | null
    role: $Enums.MessageRole | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    content: number
    createdAt: number
    confidence: number
    intent: number
    role: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    conversationId?: true
    confidence?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    conversationId?: true
    confidence?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    createdAt?: true
    confidence?: true
    intent?: true
    role?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    createdAt?: true
    confidence?: true
    intent?: true
    role?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    createdAt?: true
    confidence?: true
    intent?: true
    role?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    conversationId: number
    content: string
    createdAt: Date
    confidence: number | null
    intent: string | null
    role: $Enums.MessageRole
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    content?: boolean
    createdAt?: boolean
    confidence?: boolean
    intent?: boolean
    role?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    content?: boolean
    createdAt?: boolean
    confidence?: boolean
    intent?: boolean
    role?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    content?: boolean
    createdAt?: boolean
    confidence?: boolean
    intent?: boolean
    role?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    content?: boolean
    createdAt?: boolean
    confidence?: boolean
    intent?: boolean
    role?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "content" | "createdAt" | "confidence" | "intent" | "role", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: number
      content: string
      createdAt: Date
      confidence: number | null
      intent: string | null
      role: $Enums.MessageRole
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly conversationId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly confidence: FieldRef<"Message", 'Float'>
    readonly intent: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'MessageRole'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    leadId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    leadId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    leadId: number | null
    amount: number | null
    createdAt: Date | null
    currency: string | null
    paidAt: Date | null
    razorpayLinkId: string | null
    status: $Enums.PaymentStatus | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    leadId: number | null
    amount: number | null
    createdAt: Date | null
    currency: string | null
    paidAt: Date | null
    razorpayLinkId: string | null
    status: $Enums.PaymentStatus | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    leadId: number
    amount: number
    createdAt: number
    currency: number
    paidAt: number
    razorpayLinkId: number
    status: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    leadId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    leadId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    leadId?: true
    amount?: true
    createdAt?: true
    currency?: true
    paidAt?: true
    razorpayLinkId?: true
    status?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    leadId?: true
    amount?: true
    createdAt?: true
    currency?: true
    paidAt?: true
    razorpayLinkId?: true
    status?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    leadId?: true
    amount?: true
    createdAt?: true
    currency?: true
    paidAt?: true
    razorpayLinkId?: true
    status?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    leadId: number
    amount: number
    createdAt: Date
    currency: string
    paidAt: Date | null
    razorpayLinkId: string | null
    status: $Enums.PaymentStatus
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    amount?: boolean
    createdAt?: boolean
    currency?: boolean
    paidAt?: boolean
    razorpayLinkId?: boolean
    status?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    amount?: boolean
    createdAt?: boolean
    currency?: boolean
    paidAt?: boolean
    razorpayLinkId?: boolean
    status?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    amount?: boolean
    createdAt?: boolean
    currency?: boolean
    paidAt?: boolean
    razorpayLinkId?: boolean
    status?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    leadId?: boolean
    amount?: boolean
    createdAt?: boolean
    currency?: boolean
    paidAt?: boolean
    razorpayLinkId?: boolean
    status?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "amount" | "createdAt" | "currency" | "paidAt" | "razorpayLinkId" | "status", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leadId: number
      amount: number
      createdAt: Date
      currency: string
      paidAt: Date | null
      razorpayLinkId: string | null
      status: $Enums.PaymentStatus
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly leadId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly razorpayLinkId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model EscalationLog
   */

  export type AggregateEscalationLog = {
    _count: EscalationLogCountAggregateOutputType | null
    _avg: EscalationLogAvgAggregateOutputType | null
    _sum: EscalationLogSumAggregateOutputType | null
    _min: EscalationLogMinAggregateOutputType | null
    _max: EscalationLogMaxAggregateOutputType | null
  }

  export type EscalationLogAvgAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
  }

  export type EscalationLogSumAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
  }

  export type EscalationLogMinAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
    reason: string | null
    escalatedAt: Date | null
    resolvedAt: Date | null
  }

  export type EscalationLogMaxAggregateOutputType = {
    id: number | null
    leadId: number | null
    agentId: number | null
    reason: string | null
    escalatedAt: Date | null
    resolvedAt: Date | null
  }

  export type EscalationLogCountAggregateOutputType = {
    id: number
    leadId: number
    agentId: number
    reason: number
    escalatedAt: number
    resolvedAt: number
    _all: number
  }


  export type EscalationLogAvgAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
  }

  export type EscalationLogSumAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
  }

  export type EscalationLogMinAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    reason?: true
    escalatedAt?: true
    resolvedAt?: true
  }

  export type EscalationLogMaxAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    reason?: true
    escalatedAt?: true
    resolvedAt?: true
  }

  export type EscalationLogCountAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    reason?: true
    escalatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type EscalationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscalationLog to aggregate.
     */
    where?: EscalationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationLogs to fetch.
     */
    orderBy?: EscalationLogOrderByWithRelationInput | EscalationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscalationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EscalationLogs
    **/
    _count?: true | EscalationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscalationLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscalationLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscalationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscalationLogMaxAggregateInputType
  }

  export type GetEscalationLogAggregateType<T extends EscalationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEscalationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscalationLog[P]>
      : GetScalarType<T[P], AggregateEscalationLog[P]>
  }




  export type EscalationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscalationLogWhereInput
    orderBy?: EscalationLogOrderByWithAggregationInput | EscalationLogOrderByWithAggregationInput[]
    by: EscalationLogScalarFieldEnum[] | EscalationLogScalarFieldEnum
    having?: EscalationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscalationLogCountAggregateInputType | true
    _avg?: EscalationLogAvgAggregateInputType
    _sum?: EscalationLogSumAggregateInputType
    _min?: EscalationLogMinAggregateInputType
    _max?: EscalationLogMaxAggregateInputType
  }

  export type EscalationLogGroupByOutputType = {
    id: number
    leadId: number
    agentId: number | null
    reason: string
    escalatedAt: Date
    resolvedAt: Date | null
    _count: EscalationLogCountAggregateOutputType | null
    _avg: EscalationLogAvgAggregateOutputType | null
    _sum: EscalationLogSumAggregateOutputType | null
    _min: EscalationLogMinAggregateOutputType | null
    _max: EscalationLogMaxAggregateOutputType | null
  }

  type GetEscalationLogGroupByPayload<T extends EscalationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscalationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscalationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscalationLogGroupByOutputType[P]>
            : GetScalarType<T[P], EscalationLogGroupByOutputType[P]>
        }
      >
    >


  export type EscalationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    reason?: boolean
    escalatedAt?: boolean
    resolvedAt?: boolean
    agent?: boolean | EscalationLog$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escalationLog"]>

  export type EscalationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    reason?: boolean
    escalatedAt?: boolean
    resolvedAt?: boolean
    agent?: boolean | EscalationLog$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escalationLog"]>

  export type EscalationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    reason?: boolean
    escalatedAt?: boolean
    resolvedAt?: boolean
    agent?: boolean | EscalationLog$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["escalationLog"]>

  export type EscalationLogSelectScalar = {
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    reason?: boolean
    escalatedAt?: boolean
    resolvedAt?: boolean
  }

  export type EscalationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "agentId" | "reason" | "escalatedAt" | "resolvedAt", ExtArgs["result"]["escalationLog"]>
  export type EscalationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | EscalationLog$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type EscalationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | EscalationLog$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type EscalationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | EscalationLog$agentArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $EscalationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EscalationLog"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs> | null
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leadId: number
      agentId: number | null
      reason: string
      escalatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["escalationLog"]>
    composites: {}
  }

  type EscalationLogGetPayload<S extends boolean | null | undefined | EscalationLogDefaultArgs> = $Result.GetResult<Prisma.$EscalationLogPayload, S>

  type EscalationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscalationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscalationLogCountAggregateInputType | true
    }

  export interface EscalationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EscalationLog'], meta: { name: 'EscalationLog' } }
    /**
     * Find zero or one EscalationLog that matches the filter.
     * @param {EscalationLogFindUniqueArgs} args - Arguments to find a EscalationLog
     * @example
     * // Get one EscalationLog
     * const escalationLog = await prisma.escalationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscalationLogFindUniqueArgs>(args: SelectSubset<T, EscalationLogFindUniqueArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EscalationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscalationLogFindUniqueOrThrowArgs} args - Arguments to find a EscalationLog
     * @example
     * // Get one EscalationLog
     * const escalationLog = await prisma.escalationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscalationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EscalationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscalationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogFindFirstArgs} args - Arguments to find a EscalationLog
     * @example
     * // Get one EscalationLog
     * const escalationLog = await prisma.escalationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscalationLogFindFirstArgs>(args?: SelectSubset<T, EscalationLogFindFirstArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscalationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogFindFirstOrThrowArgs} args - Arguments to find a EscalationLog
     * @example
     * // Get one EscalationLog
     * const escalationLog = await prisma.escalationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscalationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EscalationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EscalationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EscalationLogs
     * const escalationLogs = await prisma.escalationLog.findMany()
     * 
     * // Get first 10 EscalationLogs
     * const escalationLogs = await prisma.escalationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escalationLogWithIdOnly = await prisma.escalationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscalationLogFindManyArgs>(args?: SelectSubset<T, EscalationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EscalationLog.
     * @param {EscalationLogCreateArgs} args - Arguments to create a EscalationLog.
     * @example
     * // Create one EscalationLog
     * const EscalationLog = await prisma.escalationLog.create({
     *   data: {
     *     // ... data to create a EscalationLog
     *   }
     * })
     * 
     */
    create<T extends EscalationLogCreateArgs>(args: SelectSubset<T, EscalationLogCreateArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EscalationLogs.
     * @param {EscalationLogCreateManyArgs} args - Arguments to create many EscalationLogs.
     * @example
     * // Create many EscalationLogs
     * const escalationLog = await prisma.escalationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscalationLogCreateManyArgs>(args?: SelectSubset<T, EscalationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EscalationLogs and returns the data saved in the database.
     * @param {EscalationLogCreateManyAndReturnArgs} args - Arguments to create many EscalationLogs.
     * @example
     * // Create many EscalationLogs
     * const escalationLog = await prisma.escalationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EscalationLogs and only return the `id`
     * const escalationLogWithIdOnly = await prisma.escalationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscalationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EscalationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EscalationLog.
     * @param {EscalationLogDeleteArgs} args - Arguments to delete one EscalationLog.
     * @example
     * // Delete one EscalationLog
     * const EscalationLog = await prisma.escalationLog.delete({
     *   where: {
     *     // ... filter to delete one EscalationLog
     *   }
     * })
     * 
     */
    delete<T extends EscalationLogDeleteArgs>(args: SelectSubset<T, EscalationLogDeleteArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EscalationLog.
     * @param {EscalationLogUpdateArgs} args - Arguments to update one EscalationLog.
     * @example
     * // Update one EscalationLog
     * const escalationLog = await prisma.escalationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscalationLogUpdateArgs>(args: SelectSubset<T, EscalationLogUpdateArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EscalationLogs.
     * @param {EscalationLogDeleteManyArgs} args - Arguments to filter EscalationLogs to delete.
     * @example
     * // Delete a few EscalationLogs
     * const { count } = await prisma.escalationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscalationLogDeleteManyArgs>(args?: SelectSubset<T, EscalationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscalationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EscalationLogs
     * const escalationLog = await prisma.escalationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscalationLogUpdateManyArgs>(args: SelectSubset<T, EscalationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscalationLogs and returns the data updated in the database.
     * @param {EscalationLogUpdateManyAndReturnArgs} args - Arguments to update many EscalationLogs.
     * @example
     * // Update many EscalationLogs
     * const escalationLog = await prisma.escalationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EscalationLogs and only return the `id`
     * const escalationLogWithIdOnly = await prisma.escalationLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends EscalationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EscalationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EscalationLog.
     * @param {EscalationLogUpsertArgs} args - Arguments to update or create a EscalationLog.
     * @example
     * // Update or create a EscalationLog
     * const escalationLog = await prisma.escalationLog.upsert({
     *   create: {
     *     // ... data to create a EscalationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EscalationLog we want to update
     *   }
     * })
     */
    upsert<T extends EscalationLogUpsertArgs>(args: SelectSubset<T, EscalationLogUpsertArgs<ExtArgs>>): Prisma__EscalationLogClient<$Result.GetResult<Prisma.$EscalationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EscalationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogCountArgs} args - Arguments to filter EscalationLogs to count.
     * @example
     * // Count the number of EscalationLogs
     * const count = await prisma.escalationLog.count({
     *   where: {
     *     // ... the filter for the EscalationLogs we want to count
     *   }
     * })
    **/
    count<T extends EscalationLogCountArgs>(
      args?: Subset<T, EscalationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscalationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EscalationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscalationLogAggregateArgs>(args: Subset<T, EscalationLogAggregateArgs>): Prisma.PrismaPromise<GetEscalationLogAggregateType<T>>

    /**
     * Group by EscalationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationLogGroupByArgs} args - Group by arguments.
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
      T extends EscalationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscalationLogGroupByArgs['orderBy'] }
        : { orderBy?: EscalationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscalationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscalationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EscalationLog model
   */
  readonly fields: EscalationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EscalationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscalationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends EscalationLog$agentArgs<ExtArgs> = {}>(args?: Subset<T, EscalationLog$agentArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EscalationLog model
   */
  interface EscalationLogFieldRefs {
    readonly id: FieldRef<"EscalationLog", 'Int'>
    readonly leadId: FieldRef<"EscalationLog", 'Int'>
    readonly agentId: FieldRef<"EscalationLog", 'Int'>
    readonly reason: FieldRef<"EscalationLog", 'String'>
    readonly escalatedAt: FieldRef<"EscalationLog", 'DateTime'>
    readonly resolvedAt: FieldRef<"EscalationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EscalationLog findUnique
   */
  export type EscalationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * Filter, which EscalationLog to fetch.
     */
    where: EscalationLogWhereUniqueInput
  }

  /**
   * EscalationLog findUniqueOrThrow
   */
  export type EscalationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * Filter, which EscalationLog to fetch.
     */
    where: EscalationLogWhereUniqueInput
  }

  /**
   * EscalationLog findFirst
   */
  export type EscalationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * Filter, which EscalationLog to fetch.
     */
    where?: EscalationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationLogs to fetch.
     */
    orderBy?: EscalationLogOrderByWithRelationInput | EscalationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscalationLogs.
     */
    cursor?: EscalationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscalationLogs.
     */
    distinct?: EscalationLogScalarFieldEnum | EscalationLogScalarFieldEnum[]
  }

  /**
   * EscalationLog findFirstOrThrow
   */
  export type EscalationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * Filter, which EscalationLog to fetch.
     */
    where?: EscalationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationLogs to fetch.
     */
    orderBy?: EscalationLogOrderByWithRelationInput | EscalationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscalationLogs.
     */
    cursor?: EscalationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscalationLogs.
     */
    distinct?: EscalationLogScalarFieldEnum | EscalationLogScalarFieldEnum[]
  }

  /**
   * EscalationLog findMany
   */
  export type EscalationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * Filter, which EscalationLogs to fetch.
     */
    where?: EscalationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationLogs to fetch.
     */
    orderBy?: EscalationLogOrderByWithRelationInput | EscalationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EscalationLogs.
     */
    cursor?: EscalationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscalationLogs.
     */
    distinct?: EscalationLogScalarFieldEnum | EscalationLogScalarFieldEnum[]
  }

  /**
   * EscalationLog create
   */
  export type EscalationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EscalationLog.
     */
    data: XOR<EscalationLogCreateInput, EscalationLogUncheckedCreateInput>
  }

  /**
   * EscalationLog createMany
   */
  export type EscalationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EscalationLogs.
     */
    data: EscalationLogCreateManyInput | EscalationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscalationLog createManyAndReturn
   */
  export type EscalationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * The data used to create many EscalationLogs.
     */
    data: EscalationLogCreateManyInput | EscalationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EscalationLog update
   */
  export type EscalationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EscalationLog.
     */
    data: XOR<EscalationLogUpdateInput, EscalationLogUncheckedUpdateInput>
    /**
     * Choose, which EscalationLog to update.
     */
    where: EscalationLogWhereUniqueInput
  }

  /**
   * EscalationLog updateMany
   */
  export type EscalationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EscalationLogs.
     */
    data: XOR<EscalationLogUpdateManyMutationInput, EscalationLogUncheckedUpdateManyInput>
    /**
     * Filter which EscalationLogs to update
     */
    where?: EscalationLogWhereInput
    /**
     * Limit how many EscalationLogs to update.
     */
    limit?: number
  }

  /**
   * EscalationLog updateManyAndReturn
   */
  export type EscalationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * The data used to update EscalationLogs.
     */
    data: XOR<EscalationLogUpdateManyMutationInput, EscalationLogUncheckedUpdateManyInput>
    /**
     * Filter which EscalationLogs to update
     */
    where?: EscalationLogWhereInput
    /**
     * Limit how many EscalationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EscalationLog upsert
   */
  export type EscalationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EscalationLog to update in case it exists.
     */
    where: EscalationLogWhereUniqueInput
    /**
     * In case the EscalationLog found by the `where` argument doesn't exist, create a new EscalationLog with this data.
     */
    create: XOR<EscalationLogCreateInput, EscalationLogUncheckedCreateInput>
    /**
     * In case the EscalationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscalationLogUpdateInput, EscalationLogUncheckedUpdateInput>
  }

  /**
   * EscalationLog delete
   */
  export type EscalationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
    /**
     * Filter which EscalationLog to delete.
     */
    where: EscalationLogWhereUniqueInput
  }

  /**
   * EscalationLog deleteMany
   */
  export type EscalationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscalationLogs to delete
     */
    where?: EscalationLogWhereInput
    /**
     * Limit how many EscalationLogs to delete.
     */
    limit?: number
  }

  /**
   * EscalationLog.agent
   */
  export type EscalationLog$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
  }

  /**
   * EscalationLog without action
   */
  export type EscalationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationLog
     */
    select?: EscalationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationLog
     */
    omit?: EscalationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EscalationLogInclude<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsAvgAggregateOutputType = {
    id: number | null
  }

  export type ConversationsSumAggregateOutputType = {
    id: number | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: number | null
    platform_thread_id: string | null
    status: string | null
    last_message_at: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: number | null
    platform_thread_id: string | null
    status: string | null
    last_message_at: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    platform_thread_id: number
    status: number
    last_message_at: number
    _all: number
  }


  export type ConversationsAvgAggregateInputType = {
    id?: true
  }

  export type ConversationsSumAggregateInputType = {
    id?: true
  }

  export type ConversationsMinAggregateInputType = {
    id?: true
    platform_thread_id?: true
    status?: true
    last_message_at?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    platform_thread_id?: true
    status?: true
    last_message_at?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    platform_thread_id?: true
    status?: true
    last_message_at?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _avg?: ConversationsAvgAggregateInputType
    _sum?: ConversationsSumAggregateInputType
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: number
    platform_thread_id: string
    status: string
    last_message_at: Date
    _count: ConversationsCountAggregateOutputType | null
    _avg: ConversationsAvgAggregateOutputType | null
    _sum: ConversationsSumAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_thread_id?: boolean
    status?: boolean
    last_message_at?: boolean
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_thread_id?: boolean
    status?: boolean
    last_message_at?: boolean
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform_thread_id?: boolean
    status?: boolean
    last_message_at?: boolean
  }, ExtArgs["result"]["conversations"]>

  export type conversationsSelectScalar = {
    id?: boolean
    platform_thread_id?: boolean
    status?: boolean
    last_message_at?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform_thread_id" | "status" | "last_message_at", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform_thread_id: string
      status: string
      last_message_at: Date
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {conversationsCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {conversationsUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationsWithIdOnly = await prisma.conversations.updateManyAndReturn({
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
    updateManyAndReturn<T extends conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
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
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly id: FieldRef<"conversations", 'Int'>
    readonly platform_thread_id: FieldRef<"conversations", 'String'>
    readonly status: FieldRef<"conversations", 'String'>
    readonly last_message_at: FieldRef<"conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations createManyAndReturn
   */
  export type conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations updateManyAndReturn
   */
  export type conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model intent_logs
   */

  export type AggregateIntent_logs = {
    _count: Intent_logsCountAggregateOutputType | null
    _avg: Intent_logsAvgAggregateOutputType | null
    _sum: Intent_logsSumAggregateOutputType | null
    _min: Intent_logsMinAggregateOutputType | null
    _max: Intent_logsMaxAggregateOutputType | null
  }

  export type Intent_logsAvgAggregateOutputType = {
    id: number | null
    confidence: number | null
  }

  export type Intent_logsSumAggregateOutputType = {
    id: number | null
    confidence: number | null
  }

  export type Intent_logsMinAggregateOutputType = {
    id: number | null
    sender_id: string | null
    message: string | null
    intent: string | null
    confidence: number | null
    reason: string | null
    escalated: boolean | null
    timestamp: Date | null
  }

  export type Intent_logsMaxAggregateOutputType = {
    id: number | null
    sender_id: string | null
    message: string | null
    intent: string | null
    confidence: number | null
    reason: string | null
    escalated: boolean | null
    timestamp: Date | null
  }

  export type Intent_logsCountAggregateOutputType = {
    id: number
    sender_id: number
    message: number
    intent: number
    confidence: number
    reason: number
    escalated: number
    timestamp: number
    _all: number
  }


  export type Intent_logsAvgAggregateInputType = {
    id?: true
    confidence?: true
  }

  export type Intent_logsSumAggregateInputType = {
    id?: true
    confidence?: true
  }

  export type Intent_logsMinAggregateInputType = {
    id?: true
    sender_id?: true
    message?: true
    intent?: true
    confidence?: true
    reason?: true
    escalated?: true
    timestamp?: true
  }

  export type Intent_logsMaxAggregateInputType = {
    id?: true
    sender_id?: true
    message?: true
    intent?: true
    confidence?: true
    reason?: true
    escalated?: true
    timestamp?: true
  }

  export type Intent_logsCountAggregateInputType = {
    id?: true
    sender_id?: true
    message?: true
    intent?: true
    confidence?: true
    reason?: true
    escalated?: true
    timestamp?: true
    _all?: true
  }

  export type Intent_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intent_logs to aggregate.
     */
    where?: intent_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intent_logs to fetch.
     */
    orderBy?: intent_logsOrderByWithRelationInput | intent_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: intent_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intent_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intent_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned intent_logs
    **/
    _count?: true | Intent_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Intent_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Intent_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Intent_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Intent_logsMaxAggregateInputType
  }

  export type GetIntent_logsAggregateType<T extends Intent_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateIntent_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntent_logs[P]>
      : GetScalarType<T[P], AggregateIntent_logs[P]>
  }




  export type intent_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intent_logsWhereInput
    orderBy?: intent_logsOrderByWithAggregationInput | intent_logsOrderByWithAggregationInput[]
    by: Intent_logsScalarFieldEnum[] | Intent_logsScalarFieldEnum
    having?: intent_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Intent_logsCountAggregateInputType | true
    _avg?: Intent_logsAvgAggregateInputType
    _sum?: Intent_logsSumAggregateInputType
    _min?: Intent_logsMinAggregateInputType
    _max?: Intent_logsMaxAggregateInputType
  }

  export type Intent_logsGroupByOutputType = {
    id: number
    sender_id: string
    message: string
    intent: string
    confidence: number
    reason: string
    escalated: boolean
    timestamp: Date
    _count: Intent_logsCountAggregateOutputType | null
    _avg: Intent_logsAvgAggregateOutputType | null
    _sum: Intent_logsSumAggregateOutputType | null
    _min: Intent_logsMinAggregateOutputType | null
    _max: Intent_logsMaxAggregateOutputType | null
  }

  type GetIntent_logsGroupByPayload<T extends intent_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Intent_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Intent_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Intent_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Intent_logsGroupByOutputType[P]>
        }
      >
    >


  export type intent_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    message?: boolean
    intent?: boolean
    confidence?: boolean
    reason?: boolean
    escalated?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["intent_logs"]>

  export type intent_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    message?: boolean
    intent?: boolean
    confidence?: boolean
    reason?: boolean
    escalated?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["intent_logs"]>

  export type intent_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    message?: boolean
    intent?: boolean
    confidence?: boolean
    reason?: boolean
    escalated?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["intent_logs"]>

  export type intent_logsSelectScalar = {
    id?: boolean
    sender_id?: boolean
    message?: boolean
    intent?: boolean
    confidence?: boolean
    reason?: boolean
    escalated?: boolean
    timestamp?: boolean
  }

  export type intent_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender_id" | "message" | "intent" | "confidence" | "reason" | "escalated" | "timestamp", ExtArgs["result"]["intent_logs"]>

  export type $intent_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "intent_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender_id: string
      message: string
      intent: string
      confidence: number
      reason: string
      escalated: boolean
      timestamp: Date
    }, ExtArgs["result"]["intent_logs"]>
    composites: {}
  }

  type intent_logsGetPayload<S extends boolean | null | undefined | intent_logsDefaultArgs> = $Result.GetResult<Prisma.$intent_logsPayload, S>

  type intent_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<intent_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Intent_logsCountAggregateInputType | true
    }

  export interface intent_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intent_logs'], meta: { name: 'intent_logs' } }
    /**
     * Find zero or one Intent_logs that matches the filter.
     * @param {intent_logsFindUniqueArgs} args - Arguments to find a Intent_logs
     * @example
     * // Get one Intent_logs
     * const intent_logs = await prisma.intent_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends intent_logsFindUniqueArgs>(args: SelectSubset<T, intent_logsFindUniqueArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Intent_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {intent_logsFindUniqueOrThrowArgs} args - Arguments to find a Intent_logs
     * @example
     * // Get one Intent_logs
     * const intent_logs = await prisma.intent_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends intent_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, intent_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intent_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intent_logsFindFirstArgs} args - Arguments to find a Intent_logs
     * @example
     * // Get one Intent_logs
     * const intent_logs = await prisma.intent_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends intent_logsFindFirstArgs>(args?: SelectSubset<T, intent_logsFindFirstArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intent_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intent_logsFindFirstOrThrowArgs} args - Arguments to find a Intent_logs
     * @example
     * // Get one Intent_logs
     * const intent_logs = await prisma.intent_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends intent_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, intent_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Intent_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intent_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intent_logs
     * const intent_logs = await prisma.intent_logs.findMany()
     * 
     * // Get first 10 Intent_logs
     * const intent_logs = await prisma.intent_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intent_logsWithIdOnly = await prisma.intent_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends intent_logsFindManyArgs>(args?: SelectSubset<T, intent_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Intent_logs.
     * @param {intent_logsCreateArgs} args - Arguments to create a Intent_logs.
     * @example
     * // Create one Intent_logs
     * const Intent_logs = await prisma.intent_logs.create({
     *   data: {
     *     // ... data to create a Intent_logs
     *   }
     * })
     * 
     */
    create<T extends intent_logsCreateArgs>(args: SelectSubset<T, intent_logsCreateArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Intent_logs.
     * @param {intent_logsCreateManyArgs} args - Arguments to create many Intent_logs.
     * @example
     * // Create many Intent_logs
     * const intent_logs = await prisma.intent_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends intent_logsCreateManyArgs>(args?: SelectSubset<T, intent_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Intent_logs and returns the data saved in the database.
     * @param {intent_logsCreateManyAndReturnArgs} args - Arguments to create many Intent_logs.
     * @example
     * // Create many Intent_logs
     * const intent_logs = await prisma.intent_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Intent_logs and only return the `id`
     * const intent_logsWithIdOnly = await prisma.intent_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends intent_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, intent_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Intent_logs.
     * @param {intent_logsDeleteArgs} args - Arguments to delete one Intent_logs.
     * @example
     * // Delete one Intent_logs
     * const Intent_logs = await prisma.intent_logs.delete({
     *   where: {
     *     // ... filter to delete one Intent_logs
     *   }
     * })
     * 
     */
    delete<T extends intent_logsDeleteArgs>(args: SelectSubset<T, intent_logsDeleteArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Intent_logs.
     * @param {intent_logsUpdateArgs} args - Arguments to update one Intent_logs.
     * @example
     * // Update one Intent_logs
     * const intent_logs = await prisma.intent_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends intent_logsUpdateArgs>(args: SelectSubset<T, intent_logsUpdateArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Intent_logs.
     * @param {intent_logsDeleteManyArgs} args - Arguments to filter Intent_logs to delete.
     * @example
     * // Delete a few Intent_logs
     * const { count } = await prisma.intent_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends intent_logsDeleteManyArgs>(args?: SelectSubset<T, intent_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intent_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intent_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intent_logs
     * const intent_logs = await prisma.intent_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends intent_logsUpdateManyArgs>(args: SelectSubset<T, intent_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intent_logs and returns the data updated in the database.
     * @param {intent_logsUpdateManyAndReturnArgs} args - Arguments to update many Intent_logs.
     * @example
     * // Update many Intent_logs
     * const intent_logs = await prisma.intent_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Intent_logs and only return the `id`
     * const intent_logsWithIdOnly = await prisma.intent_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends intent_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, intent_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Intent_logs.
     * @param {intent_logsUpsertArgs} args - Arguments to update or create a Intent_logs.
     * @example
     * // Update or create a Intent_logs
     * const intent_logs = await prisma.intent_logs.upsert({
     *   create: {
     *     // ... data to create a Intent_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intent_logs we want to update
     *   }
     * })
     */
    upsert<T extends intent_logsUpsertArgs>(args: SelectSubset<T, intent_logsUpsertArgs<ExtArgs>>): Prisma__intent_logsClient<$Result.GetResult<Prisma.$intent_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Intent_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intent_logsCountArgs} args - Arguments to filter Intent_logs to count.
     * @example
     * // Count the number of Intent_logs
     * const count = await prisma.intent_logs.count({
     *   where: {
     *     // ... the filter for the Intent_logs we want to count
     *   }
     * })
    **/
    count<T extends intent_logsCountArgs>(
      args?: Subset<T, intent_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Intent_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intent_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Intent_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Intent_logsAggregateArgs>(args: Subset<T, Intent_logsAggregateArgs>): Prisma.PrismaPromise<GetIntent_logsAggregateType<T>>

    /**
     * Group by Intent_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intent_logsGroupByArgs} args - Group by arguments.
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
      T extends intent_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intent_logsGroupByArgs['orderBy'] }
        : { orderBy?: intent_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, intent_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntent_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the intent_logs model
   */
  readonly fields: intent_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intent_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intent_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the intent_logs model
   */
  interface intent_logsFieldRefs {
    readonly id: FieldRef<"intent_logs", 'Int'>
    readonly sender_id: FieldRef<"intent_logs", 'String'>
    readonly message: FieldRef<"intent_logs", 'String'>
    readonly intent: FieldRef<"intent_logs", 'String'>
    readonly confidence: FieldRef<"intent_logs", 'Float'>
    readonly reason: FieldRef<"intent_logs", 'String'>
    readonly escalated: FieldRef<"intent_logs", 'Boolean'>
    readonly timestamp: FieldRef<"intent_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * intent_logs findUnique
   */
  export type intent_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * Filter, which intent_logs to fetch.
     */
    where: intent_logsWhereUniqueInput
  }

  /**
   * intent_logs findUniqueOrThrow
   */
  export type intent_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * Filter, which intent_logs to fetch.
     */
    where: intent_logsWhereUniqueInput
  }

  /**
   * intent_logs findFirst
   */
  export type intent_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * Filter, which intent_logs to fetch.
     */
    where?: intent_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intent_logs to fetch.
     */
    orderBy?: intent_logsOrderByWithRelationInput | intent_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intent_logs.
     */
    cursor?: intent_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intent_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intent_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intent_logs.
     */
    distinct?: Intent_logsScalarFieldEnum | Intent_logsScalarFieldEnum[]
  }

  /**
   * intent_logs findFirstOrThrow
   */
  export type intent_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * Filter, which intent_logs to fetch.
     */
    where?: intent_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intent_logs to fetch.
     */
    orderBy?: intent_logsOrderByWithRelationInput | intent_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intent_logs.
     */
    cursor?: intent_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intent_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intent_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intent_logs.
     */
    distinct?: Intent_logsScalarFieldEnum | Intent_logsScalarFieldEnum[]
  }

  /**
   * intent_logs findMany
   */
  export type intent_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * Filter, which intent_logs to fetch.
     */
    where?: intent_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intent_logs to fetch.
     */
    orderBy?: intent_logsOrderByWithRelationInput | intent_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing intent_logs.
     */
    cursor?: intent_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intent_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intent_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intent_logs.
     */
    distinct?: Intent_logsScalarFieldEnum | Intent_logsScalarFieldEnum[]
  }

  /**
   * intent_logs create
   */
  export type intent_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a intent_logs.
     */
    data: XOR<intent_logsCreateInput, intent_logsUncheckedCreateInput>
  }

  /**
   * intent_logs createMany
   */
  export type intent_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intent_logs.
     */
    data: intent_logsCreateManyInput | intent_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * intent_logs createManyAndReturn
   */
  export type intent_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * The data used to create many intent_logs.
     */
    data: intent_logsCreateManyInput | intent_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * intent_logs update
   */
  export type intent_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a intent_logs.
     */
    data: XOR<intent_logsUpdateInput, intent_logsUncheckedUpdateInput>
    /**
     * Choose, which intent_logs to update.
     */
    where: intent_logsWhereUniqueInput
  }

  /**
   * intent_logs updateMany
   */
  export type intent_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intent_logs.
     */
    data: XOR<intent_logsUpdateManyMutationInput, intent_logsUncheckedUpdateManyInput>
    /**
     * Filter which intent_logs to update
     */
    where?: intent_logsWhereInput
    /**
     * Limit how many intent_logs to update.
     */
    limit?: number
  }

  /**
   * intent_logs updateManyAndReturn
   */
  export type intent_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * The data used to update intent_logs.
     */
    data: XOR<intent_logsUpdateManyMutationInput, intent_logsUncheckedUpdateManyInput>
    /**
     * Filter which intent_logs to update
     */
    where?: intent_logsWhereInput
    /**
     * Limit how many intent_logs to update.
     */
    limit?: number
  }

  /**
   * intent_logs upsert
   */
  export type intent_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the intent_logs to update in case it exists.
     */
    where: intent_logsWhereUniqueInput
    /**
     * In case the intent_logs found by the `where` argument doesn't exist, create a new intent_logs with this data.
     */
    create: XOR<intent_logsCreateInput, intent_logsUncheckedCreateInput>
    /**
     * In case the intent_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intent_logsUpdateInput, intent_logsUncheckedUpdateInput>
  }

  /**
   * intent_logs delete
   */
  export type intent_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
    /**
     * Filter which intent_logs to delete.
     */
    where: intent_logsWhereUniqueInput
  }

  /**
   * intent_logs deleteMany
   */
  export type intent_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intent_logs to delete
     */
    where?: intent_logsWhereInput
    /**
     * Limit how many intent_logs to delete.
     */
    limit?: number
  }

  /**
   * intent_logs without action
   */
  export type intent_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intent_logs
     */
    select?: intent_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intent_logs
     */
    omit?: intent_logsOmit<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
    conversation_id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
    conversation_id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    conversation_id: number | null
    sender: string | null
    content: string | null
    timestamp: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    conversation_id: number | null
    sender: string | null
    content: string | null
    timestamp: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    conversation_id: number
    sender: number
    content: number
    timestamp: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
    conversation_id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
    conversation_id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    conversation_id?: true
    sender?: true
    content?: true
    timestamp?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    conversation_id?: true
    sender?: true
    content?: true
    timestamp?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    conversation_id?: true
    sender?: true
    content?: true
    timestamp?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    conversation_id: number
    sender: string
    content: string
    timestamp: Date
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender?: boolean
    content?: boolean
    timestamp?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender?: boolean
    content?: boolean
    timestamp?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversation_id?: boolean
    sender?: boolean
    content?: boolean
    timestamp?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    conversation_id?: boolean
    sender?: boolean
    content?: boolean
    timestamp?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversation_id" | "sender" | "content" | "timestamp", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversation_id: number
      sender: string
      content: string
      timestamp: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly conversation_id: FieldRef<"messages", 'Int'>
    readonly sender: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly timestamp: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model token_logs
   */

  export type AggregateToken_logs = {
    _count: Token_logsCountAggregateOutputType | null
    _avg: Token_logsAvgAggregateOutputType | null
    _sum: Token_logsSumAggregateOutputType | null
    _min: Token_logsMinAggregateOutputType | null
    _max: Token_logsMaxAggregateOutputType | null
  }

  export type Token_logsAvgAggregateOutputType = {
    id: number | null
    prompt_tokens: number | null
    completion_tokens: number | null
    total_tokens: number | null
  }

  export type Token_logsSumAggregateOutputType = {
    id: number | null
    prompt_tokens: number | null
    completion_tokens: number | null
    total_tokens: number | null
  }

  export type Token_logsMinAggregateOutputType = {
    id: number | null
    sender_id: string | null
    model: string | null
    intent: string | null
    prompt_tokens: number | null
    completion_tokens: number | null
    total_tokens: number | null
    timestamp: Date | null
  }

  export type Token_logsMaxAggregateOutputType = {
    id: number | null
    sender_id: string | null
    model: string | null
    intent: string | null
    prompt_tokens: number | null
    completion_tokens: number | null
    total_tokens: number | null
    timestamp: Date | null
  }

  export type Token_logsCountAggregateOutputType = {
    id: number
    sender_id: number
    model: number
    intent: number
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    timestamp: number
    _all: number
  }


  export type Token_logsAvgAggregateInputType = {
    id?: true
    prompt_tokens?: true
    completion_tokens?: true
    total_tokens?: true
  }

  export type Token_logsSumAggregateInputType = {
    id?: true
    prompt_tokens?: true
    completion_tokens?: true
    total_tokens?: true
  }

  export type Token_logsMinAggregateInputType = {
    id?: true
    sender_id?: true
    model?: true
    intent?: true
    prompt_tokens?: true
    completion_tokens?: true
    total_tokens?: true
    timestamp?: true
  }

  export type Token_logsMaxAggregateInputType = {
    id?: true
    sender_id?: true
    model?: true
    intent?: true
    prompt_tokens?: true
    completion_tokens?: true
    total_tokens?: true
    timestamp?: true
  }

  export type Token_logsCountAggregateInputType = {
    id?: true
    sender_id?: true
    model?: true
    intent?: true
    prompt_tokens?: true
    completion_tokens?: true
    total_tokens?: true
    timestamp?: true
    _all?: true
  }

  export type Token_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_logs to aggregate.
     */
    where?: token_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_logs to fetch.
     */
    orderBy?: token_logsOrderByWithRelationInput | token_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: token_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned token_logs
    **/
    _count?: true | Token_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Token_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Token_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Token_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Token_logsMaxAggregateInputType
  }

  export type GetToken_logsAggregateType<T extends Token_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateToken_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken_logs[P]>
      : GetScalarType<T[P], AggregateToken_logs[P]>
  }




  export type token_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_logsWhereInput
    orderBy?: token_logsOrderByWithAggregationInput | token_logsOrderByWithAggregationInput[]
    by: Token_logsScalarFieldEnum[] | Token_logsScalarFieldEnum
    having?: token_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Token_logsCountAggregateInputType | true
    _avg?: Token_logsAvgAggregateInputType
    _sum?: Token_logsSumAggregateInputType
    _min?: Token_logsMinAggregateInputType
    _max?: Token_logsMaxAggregateInputType
  }

  export type Token_logsGroupByOutputType = {
    id: number
    sender_id: string
    model: string
    intent: string
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    timestamp: Date
    _count: Token_logsCountAggregateOutputType | null
    _avg: Token_logsAvgAggregateOutputType | null
    _sum: Token_logsSumAggregateOutputType | null
    _min: Token_logsMinAggregateOutputType | null
    _max: Token_logsMaxAggregateOutputType | null
  }

  type GetToken_logsGroupByPayload<T extends token_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Token_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Token_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Token_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Token_logsGroupByOutputType[P]>
        }
      >
    >


  export type token_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    model?: boolean
    intent?: boolean
    prompt_tokens?: boolean
    completion_tokens?: boolean
    total_tokens?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["token_logs"]>

  export type token_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    model?: boolean
    intent?: boolean
    prompt_tokens?: boolean
    completion_tokens?: boolean
    total_tokens?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["token_logs"]>

  export type token_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_id?: boolean
    model?: boolean
    intent?: boolean
    prompt_tokens?: boolean
    completion_tokens?: boolean
    total_tokens?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["token_logs"]>

  export type token_logsSelectScalar = {
    id?: boolean
    sender_id?: boolean
    model?: boolean
    intent?: boolean
    prompt_tokens?: boolean
    completion_tokens?: boolean
    total_tokens?: boolean
    timestamp?: boolean
  }

  export type token_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender_id" | "model" | "intent" | "prompt_tokens" | "completion_tokens" | "total_tokens" | "timestamp", ExtArgs["result"]["token_logs"]>

  export type $token_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender_id: string
      model: string
      intent: string
      prompt_tokens: number
      completion_tokens: number
      total_tokens: number
      timestamp: Date
    }, ExtArgs["result"]["token_logs"]>
    composites: {}
  }

  type token_logsGetPayload<S extends boolean | null | undefined | token_logsDefaultArgs> = $Result.GetResult<Prisma.$token_logsPayload, S>

  type token_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<token_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Token_logsCountAggregateInputType | true
    }

  export interface token_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token_logs'], meta: { name: 'token_logs' } }
    /**
     * Find zero or one Token_logs that matches the filter.
     * @param {token_logsFindUniqueArgs} args - Arguments to find a Token_logs
     * @example
     * // Get one Token_logs
     * const token_logs = await prisma.token_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends token_logsFindUniqueArgs>(args: SelectSubset<T, token_logsFindUniqueArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {token_logsFindUniqueOrThrowArgs} args - Arguments to find a Token_logs
     * @example
     * // Get one Token_logs
     * const token_logs = await prisma.token_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends token_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, token_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_logsFindFirstArgs} args - Arguments to find a Token_logs
     * @example
     * // Get one Token_logs
     * const token_logs = await prisma.token_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends token_logsFindFirstArgs>(args?: SelectSubset<T, token_logsFindFirstArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_logsFindFirstOrThrowArgs} args - Arguments to find a Token_logs
     * @example
     * // Get one Token_logs
     * const token_logs = await prisma.token_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends token_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, token_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Token_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Token_logs
     * const token_logs = await prisma.token_logs.findMany()
     * 
     * // Get first 10 Token_logs
     * const token_logs = await prisma.token_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const token_logsWithIdOnly = await prisma.token_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends token_logsFindManyArgs>(args?: SelectSubset<T, token_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token_logs.
     * @param {token_logsCreateArgs} args - Arguments to create a Token_logs.
     * @example
     * // Create one Token_logs
     * const Token_logs = await prisma.token_logs.create({
     *   data: {
     *     // ... data to create a Token_logs
     *   }
     * })
     * 
     */
    create<T extends token_logsCreateArgs>(args: SelectSubset<T, token_logsCreateArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Token_logs.
     * @param {token_logsCreateManyArgs} args - Arguments to create many Token_logs.
     * @example
     * // Create many Token_logs
     * const token_logs = await prisma.token_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends token_logsCreateManyArgs>(args?: SelectSubset<T, token_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Token_logs and returns the data saved in the database.
     * @param {token_logsCreateManyAndReturnArgs} args - Arguments to create many Token_logs.
     * @example
     * // Create many Token_logs
     * const token_logs = await prisma.token_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Token_logs and only return the `id`
     * const token_logsWithIdOnly = await prisma.token_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends token_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, token_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token_logs.
     * @param {token_logsDeleteArgs} args - Arguments to delete one Token_logs.
     * @example
     * // Delete one Token_logs
     * const Token_logs = await prisma.token_logs.delete({
     *   where: {
     *     // ... filter to delete one Token_logs
     *   }
     * })
     * 
     */
    delete<T extends token_logsDeleteArgs>(args: SelectSubset<T, token_logsDeleteArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token_logs.
     * @param {token_logsUpdateArgs} args - Arguments to update one Token_logs.
     * @example
     * // Update one Token_logs
     * const token_logs = await prisma.token_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends token_logsUpdateArgs>(args: SelectSubset<T, token_logsUpdateArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Token_logs.
     * @param {token_logsDeleteManyArgs} args - Arguments to filter Token_logs to delete.
     * @example
     * // Delete a few Token_logs
     * const { count } = await prisma.token_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends token_logsDeleteManyArgs>(args?: SelectSubset<T, token_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Token_logs
     * const token_logs = await prisma.token_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends token_logsUpdateManyArgs>(args: SelectSubset<T, token_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_logs and returns the data updated in the database.
     * @param {token_logsUpdateManyAndReturnArgs} args - Arguments to update many Token_logs.
     * @example
     * // Update many Token_logs
     * const token_logs = await prisma.token_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Token_logs and only return the `id`
     * const token_logsWithIdOnly = await prisma.token_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends token_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, token_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token_logs.
     * @param {token_logsUpsertArgs} args - Arguments to update or create a Token_logs.
     * @example
     * // Update or create a Token_logs
     * const token_logs = await prisma.token_logs.upsert({
     *   create: {
     *     // ... data to create a Token_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token_logs we want to update
     *   }
     * })
     */
    upsert<T extends token_logsUpsertArgs>(args: SelectSubset<T, token_logsUpsertArgs<ExtArgs>>): Prisma__token_logsClient<$Result.GetResult<Prisma.$token_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Token_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_logsCountArgs} args - Arguments to filter Token_logs to count.
     * @example
     * // Count the number of Token_logs
     * const count = await prisma.token_logs.count({
     *   where: {
     *     // ... the filter for the Token_logs we want to count
     *   }
     * })
    **/
    count<T extends token_logsCountArgs>(
      args?: Subset<T, token_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Token_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Token_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Token_logsAggregateArgs>(args: Subset<T, Token_logsAggregateArgs>): Prisma.PrismaPromise<GetToken_logsAggregateType<T>>

    /**
     * Group by Token_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_logsGroupByArgs} args - Group by arguments.
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
      T extends token_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: token_logsGroupByArgs['orderBy'] }
        : { orderBy?: token_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, token_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToken_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token_logs model
   */
  readonly fields: token_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__token_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the token_logs model
   */
  interface token_logsFieldRefs {
    readonly id: FieldRef<"token_logs", 'Int'>
    readonly sender_id: FieldRef<"token_logs", 'String'>
    readonly model: FieldRef<"token_logs", 'String'>
    readonly intent: FieldRef<"token_logs", 'String'>
    readonly prompt_tokens: FieldRef<"token_logs", 'Int'>
    readonly completion_tokens: FieldRef<"token_logs", 'Int'>
    readonly total_tokens: FieldRef<"token_logs", 'Int'>
    readonly timestamp: FieldRef<"token_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * token_logs findUnique
   */
  export type token_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * Filter, which token_logs to fetch.
     */
    where: token_logsWhereUniqueInput
  }

  /**
   * token_logs findUniqueOrThrow
   */
  export type token_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * Filter, which token_logs to fetch.
     */
    where: token_logsWhereUniqueInput
  }

  /**
   * token_logs findFirst
   */
  export type token_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * Filter, which token_logs to fetch.
     */
    where?: token_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_logs to fetch.
     */
    orderBy?: token_logsOrderByWithRelationInput | token_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_logs.
     */
    cursor?: token_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_logs.
     */
    distinct?: Token_logsScalarFieldEnum | Token_logsScalarFieldEnum[]
  }

  /**
   * token_logs findFirstOrThrow
   */
  export type token_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * Filter, which token_logs to fetch.
     */
    where?: token_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_logs to fetch.
     */
    orderBy?: token_logsOrderByWithRelationInput | token_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_logs.
     */
    cursor?: token_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_logs.
     */
    distinct?: Token_logsScalarFieldEnum | Token_logsScalarFieldEnum[]
  }

  /**
   * token_logs findMany
   */
  export type token_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * Filter, which token_logs to fetch.
     */
    where?: token_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_logs to fetch.
     */
    orderBy?: token_logsOrderByWithRelationInput | token_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing token_logs.
     */
    cursor?: token_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_logs.
     */
    distinct?: Token_logsScalarFieldEnum | Token_logsScalarFieldEnum[]
  }

  /**
   * token_logs create
   */
  export type token_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a token_logs.
     */
    data: XOR<token_logsCreateInput, token_logsUncheckedCreateInput>
  }

  /**
   * token_logs createMany
   */
  export type token_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many token_logs.
     */
    data: token_logsCreateManyInput | token_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token_logs createManyAndReturn
   */
  export type token_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * The data used to create many token_logs.
     */
    data: token_logsCreateManyInput | token_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token_logs update
   */
  export type token_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a token_logs.
     */
    data: XOR<token_logsUpdateInput, token_logsUncheckedUpdateInput>
    /**
     * Choose, which token_logs to update.
     */
    where: token_logsWhereUniqueInput
  }

  /**
   * token_logs updateMany
   */
  export type token_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update token_logs.
     */
    data: XOR<token_logsUpdateManyMutationInput, token_logsUncheckedUpdateManyInput>
    /**
     * Filter which token_logs to update
     */
    where?: token_logsWhereInput
    /**
     * Limit how many token_logs to update.
     */
    limit?: number
  }

  /**
   * token_logs updateManyAndReturn
   */
  export type token_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * The data used to update token_logs.
     */
    data: XOR<token_logsUpdateManyMutationInput, token_logsUncheckedUpdateManyInput>
    /**
     * Filter which token_logs to update
     */
    where?: token_logsWhereInput
    /**
     * Limit how many token_logs to update.
     */
    limit?: number
  }

  /**
   * token_logs upsert
   */
  export type token_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the token_logs to update in case it exists.
     */
    where: token_logsWhereUniqueInput
    /**
     * In case the token_logs found by the `where` argument doesn't exist, create a new token_logs with this data.
     */
    create: XOR<token_logsCreateInput, token_logsUncheckedCreateInput>
    /**
     * In case the token_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<token_logsUpdateInput, token_logsUncheckedUpdateInput>
  }

  /**
   * token_logs delete
   */
  export type token_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
    /**
     * Filter which token_logs to delete.
     */
    where: token_logsWhereUniqueInput
  }

  /**
   * token_logs deleteMany
   */
  export type token_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_logs to delete
     */
    where?: token_logsWhereInput
    /**
     * Limit how many token_logs to delete.
     */
    limit?: number
  }

  /**
   * token_logs without action
   */
  export type token_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_logs
     */
    select?: token_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_logs
     */
    omit?: token_logsOmit<ExtArgs> | null
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


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    assignedAgentId: 'assignedAgentId',
    platform: 'platform',
    sourceId: 'sourceId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    email: 'email',
    isOnline: 'isOnline',
    passwordHash: 'passwordHash',
    role: 'role'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    agentId: 'agentId',
    status: 'status',
    createdAt: 'createdAt',
    platform: 'platform'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    content: 'content',
    createdAt: 'createdAt',
    confidence: 'confidence',
    intent: 'intent',
    role: 'role'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    amount: 'amount',
    createdAt: 'createdAt',
    currency: 'currency',
    paidAt: 'paidAt',
    razorpayLinkId: 'razorpayLinkId',
    status: 'status'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const EscalationLogScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    agentId: 'agentId',
    reason: 'reason',
    escalatedAt: 'escalatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type EscalationLogScalarFieldEnum = (typeof EscalationLogScalarFieldEnum)[keyof typeof EscalationLogScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    platform_thread_id: 'platform_thread_id',
    status: 'status',
    last_message_at: 'last_message_at'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const Intent_logsScalarFieldEnum: {
    id: 'id',
    sender_id: 'sender_id',
    message: 'message',
    intent: 'intent',
    confidence: 'confidence',
    reason: 'reason',
    escalated: 'escalated',
    timestamp: 'timestamp'
  };

  export type Intent_logsScalarFieldEnum = (typeof Intent_logsScalarFieldEnum)[keyof typeof Intent_logsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    conversation_id: 'conversation_id',
    sender: 'sender',
    content: 'content',
    timestamp: 'timestamp'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const Token_logsScalarFieldEnum: {
    id: 'id',
    sender_id: 'sender_id',
    model: 'model',
    intent: 'intent',
    prompt_tokens: 'prompt_tokens',
    completion_tokens: 'completion_tokens',
    total_tokens: 'total_tokens',
    timestamp: 'timestamp'
  };

  export type Token_logsScalarFieldEnum = (typeof Token_logsScalarFieldEnum)[keyof typeof Token_logsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AgentRole'
   */
  export type EnumAgentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentRole'>
    


  /**
   * Reference to a field of type 'AgentRole[]'
   */
  export type ListEnumAgentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MessageRole'
   */
  export type EnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole'>
    


  /**
   * Reference to a field of type 'MessageRole[]'
   */
  export type ListEnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: IntFilter<"Lead"> | number
    name?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    assignedAgentId?: IntNullableFilter<"Lead"> | number | null
    platform?: StringFilter<"Lead"> | string
    sourceId?: StringFilter<"Lead"> | string
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    conversations?: ConversationListRelationFilter
    escalations?: EscalationLogListRelationFilter
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignedAgentId?: SortOrderInput | SortOrder
    platform?: SortOrder
    sourceId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    conversations?: ConversationOrderByRelationAggregateInput
    escalations?: EscalationLogOrderByRelationAggregateInput
    agent?: AgentOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sourceId?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    assignedAgentId?: IntNullableFilter<"Lead"> | number | null
    platform?: StringFilter<"Lead"> | string
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    conversations?: ConversationListRelationFilter
    escalations?: EscalationLogListRelationFilter
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id" | "sourceId">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignedAgentId?: SortOrderInput | SortOrder
    platform?: SortOrder
    sourceId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lead"> | number
    name?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    assignedAgentId?: IntNullableWithAggregatesFilter<"Lead"> | number | null
    platform?: StringWithAggregatesFilter<"Lead"> | string
    sourceId?: StringWithAggregatesFilter<"Lead"> | string
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: IntFilter<"Agent"> | number
    name?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    email?: StringFilter<"Agent"> | string
    isOnline?: BoolFilter<"Agent"> | boolean
    passwordHash?: StringFilter<"Agent"> | string
    role?: EnumAgentRoleFilter<"Agent"> | $Enums.AgentRole
    conversations?: ConversationListRelationFilter
    escalations?: EscalationLogListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    isOnline?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    conversations?: ConversationOrderByRelationAggregateInput
    escalations?: EscalationLogOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    name?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    isOnline?: BoolFilter<"Agent"> | boolean
    passwordHash?: StringFilter<"Agent"> | string
    role?: EnumAgentRoleFilter<"Agent"> | $Enums.AgentRole
    conversations?: ConversationListRelationFilter
    escalations?: EscalationLogListRelationFilter
    leads?: LeadListRelationFilter
  }, "id" | "email">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    isOnline?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agent"> | number
    name?: StringWithAggregatesFilter<"Agent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    email?: StringWithAggregatesFilter<"Agent"> | string
    isOnline?: BoolWithAggregatesFilter<"Agent"> | boolean
    passwordHash?: StringWithAggregatesFilter<"Agent"> | string
    role?: EnumAgentRoleWithAggregatesFilter<"Agent"> | $Enums.AgentRole
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    leadId?: IntFilter<"Conversation"> | number
    agentId?: IntNullableFilter<"Conversation"> | number | null
    status?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    platform?: StringFilter<"Conversation"> | string
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    platform?: SortOrder
    agent?: AgentOrderByWithRelationInput
    lead?: LeadOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    leadId?: IntFilter<"Conversation"> | number
    agentId?: IntNullableFilter<"Conversation"> | number | null
    status?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    platform?: StringFilter<"Conversation"> | string
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    platform?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    leadId?: IntWithAggregatesFilter<"Conversation"> | number
    agentId?: IntNullableWithAggregatesFilter<"Conversation"> | number | null
    status?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    platform?: StringWithAggregatesFilter<"Conversation"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    confidence?: FloatNullableFilter<"Message"> | number | null
    intent?: StringNullableFilter<"Message"> | string | null
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    confidence?: SortOrderInput | SortOrder
    intent?: SortOrderInput | SortOrder
    role?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    confidence?: FloatNullableFilter<"Message"> | number | null
    intent?: StringNullableFilter<"Message"> | string | null
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    confidence?: SortOrderInput | SortOrder
    intent?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    conversationId?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    confidence?: FloatNullableWithAggregatesFilter<"Message"> | number | null
    intent?: StringNullableWithAggregatesFilter<"Message"> | string | null
    role?: EnumMessageRoleWithAggregatesFilter<"Message"> | $Enums.MessageRole
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    leadId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    currency?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    razorpayLinkId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    razorpayLinkId?: SortOrderInput | SortOrder
    status?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    leadId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    currency?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    razorpayLinkId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    razorpayLinkId?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    leadId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    razorpayLinkId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
  }

  export type EscalationLogWhereInput = {
    AND?: EscalationLogWhereInput | EscalationLogWhereInput[]
    OR?: EscalationLogWhereInput[]
    NOT?: EscalationLogWhereInput | EscalationLogWhereInput[]
    id?: IntFilter<"EscalationLog"> | number
    leadId?: IntFilter<"EscalationLog"> | number
    agentId?: IntNullableFilter<"EscalationLog"> | number | null
    reason?: StringFilter<"EscalationLog"> | string
    escalatedAt?: DateTimeFilter<"EscalationLog"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"EscalationLog"> | Date | string | null
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type EscalationLogOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    reason?: SortOrder
    escalatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    agent?: AgentOrderByWithRelationInput
    lead?: LeadOrderByWithRelationInput
  }

  export type EscalationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EscalationLogWhereInput | EscalationLogWhereInput[]
    OR?: EscalationLogWhereInput[]
    NOT?: EscalationLogWhereInput | EscalationLogWhereInput[]
    leadId?: IntFilter<"EscalationLog"> | number
    agentId?: IntNullableFilter<"EscalationLog"> | number | null
    reason?: StringFilter<"EscalationLog"> | string
    escalatedAt?: DateTimeFilter<"EscalationLog"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"EscalationLog"> | Date | string | null
    agent?: XOR<AgentNullableScalarRelationFilter, AgentWhereInput> | null
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type EscalationLogOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    reason?: SortOrder
    escalatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: EscalationLogCountOrderByAggregateInput
    _avg?: EscalationLogAvgOrderByAggregateInput
    _max?: EscalationLogMaxOrderByAggregateInput
    _min?: EscalationLogMinOrderByAggregateInput
    _sum?: EscalationLogSumOrderByAggregateInput
  }

  export type EscalationLogScalarWhereWithAggregatesInput = {
    AND?: EscalationLogScalarWhereWithAggregatesInput | EscalationLogScalarWhereWithAggregatesInput[]
    OR?: EscalationLogScalarWhereWithAggregatesInput[]
    NOT?: EscalationLogScalarWhereWithAggregatesInput | EscalationLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EscalationLog"> | number
    leadId?: IntWithAggregatesFilter<"EscalationLog"> | number
    agentId?: IntNullableWithAggregatesFilter<"EscalationLog"> | number | null
    reason?: StringWithAggregatesFilter<"EscalationLog"> | string
    escalatedAt?: DateTimeWithAggregatesFilter<"EscalationLog"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"EscalationLog"> | Date | string | null
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    id?: IntFilter<"conversations"> | number
    platform_thread_id?: StringFilter<"conversations"> | string
    status?: StringFilter<"conversations"> | string
    last_message_at?: DateTimeFilter<"conversations"> | Date | string
    messages?: MessagesListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    platform_thread_id?: SortOrder
    status?: SortOrder
    last_message_at?: SortOrder
    messages?: messagesOrderByRelationAggregateInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    platform_thread_id?: string
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    status?: StringFilter<"conversations"> | string
    last_message_at?: DateTimeFilter<"conversations"> | Date | string
    messages?: MessagesListRelationFilter
  }, "id" | "platform_thread_id">

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    platform_thread_id?: SortOrder
    status?: SortOrder
    last_message_at?: SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _avg?: conversationsAvgOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
    _sum?: conversationsSumOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"conversations"> | number
    platform_thread_id?: StringWithAggregatesFilter<"conversations"> | string
    status?: StringWithAggregatesFilter<"conversations"> | string
    last_message_at?: DateTimeWithAggregatesFilter<"conversations"> | Date | string
  }

  export type intent_logsWhereInput = {
    AND?: intent_logsWhereInput | intent_logsWhereInput[]
    OR?: intent_logsWhereInput[]
    NOT?: intent_logsWhereInput | intent_logsWhereInput[]
    id?: IntFilter<"intent_logs"> | number
    sender_id?: StringFilter<"intent_logs"> | string
    message?: StringFilter<"intent_logs"> | string
    intent?: StringFilter<"intent_logs"> | string
    confidence?: FloatFilter<"intent_logs"> | number
    reason?: StringFilter<"intent_logs"> | string
    escalated?: BoolFilter<"intent_logs"> | boolean
    timestamp?: DateTimeFilter<"intent_logs"> | Date | string
  }

  export type intent_logsOrderByWithRelationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    escalated?: SortOrder
    timestamp?: SortOrder
  }

  export type intent_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: intent_logsWhereInput | intent_logsWhereInput[]
    OR?: intent_logsWhereInput[]
    NOT?: intent_logsWhereInput | intent_logsWhereInput[]
    sender_id?: StringFilter<"intent_logs"> | string
    message?: StringFilter<"intent_logs"> | string
    intent?: StringFilter<"intent_logs"> | string
    confidence?: FloatFilter<"intent_logs"> | number
    reason?: StringFilter<"intent_logs"> | string
    escalated?: BoolFilter<"intent_logs"> | boolean
    timestamp?: DateTimeFilter<"intent_logs"> | Date | string
  }, "id">

  export type intent_logsOrderByWithAggregationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    escalated?: SortOrder
    timestamp?: SortOrder
    _count?: intent_logsCountOrderByAggregateInput
    _avg?: intent_logsAvgOrderByAggregateInput
    _max?: intent_logsMaxOrderByAggregateInput
    _min?: intent_logsMinOrderByAggregateInput
    _sum?: intent_logsSumOrderByAggregateInput
  }

  export type intent_logsScalarWhereWithAggregatesInput = {
    AND?: intent_logsScalarWhereWithAggregatesInput | intent_logsScalarWhereWithAggregatesInput[]
    OR?: intent_logsScalarWhereWithAggregatesInput[]
    NOT?: intent_logsScalarWhereWithAggregatesInput | intent_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"intent_logs"> | number
    sender_id?: StringWithAggregatesFilter<"intent_logs"> | string
    message?: StringWithAggregatesFilter<"intent_logs"> | string
    intent?: StringWithAggregatesFilter<"intent_logs"> | string
    confidence?: FloatWithAggregatesFilter<"intent_logs"> | number
    reason?: StringWithAggregatesFilter<"intent_logs"> | string
    escalated?: BoolWithAggregatesFilter<"intent_logs"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"intent_logs"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    conversation_id?: IntFilter<"messages"> | number
    sender?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    timestamp?: DateTimeFilter<"messages"> | Date | string
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    conversations?: conversationsOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    conversation_id?: IntFilter<"messages"> | number
    sender?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    timestamp?: DateTimeFilter<"messages"> | Date | string
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    conversation_id?: IntWithAggregatesFilter<"messages"> | number
    sender?: StringWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    timestamp?: DateTimeWithAggregatesFilter<"messages"> | Date | string
  }

  export type token_logsWhereInput = {
    AND?: token_logsWhereInput | token_logsWhereInput[]
    OR?: token_logsWhereInput[]
    NOT?: token_logsWhereInput | token_logsWhereInput[]
    id?: IntFilter<"token_logs"> | number
    sender_id?: StringFilter<"token_logs"> | string
    model?: StringFilter<"token_logs"> | string
    intent?: StringFilter<"token_logs"> | string
    prompt_tokens?: IntFilter<"token_logs"> | number
    completion_tokens?: IntFilter<"token_logs"> | number
    total_tokens?: IntFilter<"token_logs"> | number
    timestamp?: DateTimeFilter<"token_logs"> | Date | string
  }

  export type token_logsOrderByWithRelationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    model?: SortOrder
    intent?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
    timestamp?: SortOrder
  }

  export type token_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: token_logsWhereInput | token_logsWhereInput[]
    OR?: token_logsWhereInput[]
    NOT?: token_logsWhereInput | token_logsWhereInput[]
    sender_id?: StringFilter<"token_logs"> | string
    model?: StringFilter<"token_logs"> | string
    intent?: StringFilter<"token_logs"> | string
    prompt_tokens?: IntFilter<"token_logs"> | number
    completion_tokens?: IntFilter<"token_logs"> | number
    total_tokens?: IntFilter<"token_logs"> | number
    timestamp?: DateTimeFilter<"token_logs"> | Date | string
  }, "id">

  export type token_logsOrderByWithAggregationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    model?: SortOrder
    intent?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
    timestamp?: SortOrder
    _count?: token_logsCountOrderByAggregateInput
    _avg?: token_logsAvgOrderByAggregateInput
    _max?: token_logsMaxOrderByAggregateInput
    _min?: token_logsMinOrderByAggregateInput
    _sum?: token_logsSumOrderByAggregateInput
  }

  export type token_logsScalarWhereWithAggregatesInput = {
    AND?: token_logsScalarWhereWithAggregatesInput | token_logsScalarWhereWithAggregatesInput[]
    OR?: token_logsScalarWhereWithAggregatesInput[]
    NOT?: token_logsScalarWhereWithAggregatesInput | token_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"token_logs"> | number
    sender_id?: StringWithAggregatesFilter<"token_logs"> | string
    model?: StringWithAggregatesFilter<"token_logs"> | string
    intent?: StringWithAggregatesFilter<"token_logs"> | string
    prompt_tokens?: IntWithAggregatesFilter<"token_logs"> | number
    completion_tokens?: IntWithAggregatesFilter<"token_logs"> | number
    total_tokens?: IntWithAggregatesFilter<"token_logs"> | number
    timestamp?: DateTimeWithAggregatesFilter<"token_logs"> | Date | string
  }

  export type LeadCreateInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutLeadInput
    escalations?: EscalationLogCreateNestedManyWithoutLeadInput
    agent?: AgentCreateNestedOneWithoutLeadsInput
    payments?: PaymentCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignedAgentId?: number | null
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutLeadInput
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutLeadInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutLeadNestedInput
    escalations?: EscalationLogUpdateManyWithoutLeadNestedInput
    agent?: AgentUpdateOneWithoutLeadsNestedInput
    payments?: PaymentUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAgentId?: NullableIntFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutLeadNestedInput
    escalations?: EscalationLogUncheckedUpdateManyWithoutLeadNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignedAgentId?: number | null
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAgentId?: NullableIntFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    conversations?: ConversationCreateNestedManyWithoutAgentInput
    escalations?: EscalationLogCreateNestedManyWithoutAgentInput
    leads?: LeadCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    conversations?: ConversationUncheckedCreateNestedManyWithoutAgentInput
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutAgentInput
    leads?: LeadUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    conversations?: ConversationUpdateManyWithoutAgentNestedInput
    escalations?: EscalationLogUpdateManyWithoutAgentNestedInput
    leads?: LeadUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    conversations?: ConversationUncheckedUpdateManyWithoutAgentNestedInput
    escalations?: EscalationLogUncheckedUpdateManyWithoutAgentNestedInput
    leads?: LeadUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
  }

  export type AgentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
  }

  export type ConversationCreateInput = {
    status?: string
    createdAt?: Date | string
    platform: string
    agent?: AgentCreateNestedOneWithoutConversationsInput
    lead: LeadCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    leadId: number
    agentId?: number | null
    status?: string
    createdAt?: Date | string
    platform: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneWithoutConversationsNestedInput
    lead?: LeadUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    leadId: number
    agentId?: number | null
    status?: string
    createdAt?: Date | string
    platform: string
  }

  export type ConversationUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    confidence?: number | null
    intent?: string | null
    role?: $Enums.MessageRole
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    conversationId: number
    content: string
    createdAt?: Date | string
    confidence?: number | null
    intent?: string | null
    role?: $Enums.MessageRole
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
  }

  export type MessageCreateManyInput = {
    id?: number
    conversationId: number
    content: string
    createdAt?: Date | string
    confidence?: number | null
    intent?: string | null
    role?: $Enums.MessageRole
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
  }

  export type PaymentCreateInput = {
    amount: number
    createdAt?: Date | string
    currency?: string
    paidAt?: Date | string | null
    razorpayLinkId?: string | null
    status?: $Enums.PaymentStatus
    lead: LeadCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    leadId: number
    amount: number
    createdAt?: Date | string
    currency?: string
    paidAt?: Date | string | null
    razorpayLinkId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    lead?: LeadUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentCreateManyInput = {
    id?: number
    leadId: number
    amount: number
    createdAt?: Date | string
    currency?: string
    paidAt?: Date | string | null
    razorpayLinkId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type EscalationLogCreateInput = {
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
    agent?: AgentCreateNestedOneWithoutEscalationsInput
    lead: LeadCreateNestedOneWithoutEscalationsInput
  }

  export type EscalationLogUncheckedCreateInput = {
    id?: number
    leadId: number
    agentId?: number | null
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationLogUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agent?: AgentUpdateOneWithoutEscalationsNestedInput
    lead?: LeadUpdateOneRequiredWithoutEscalationsNestedInput
  }

  export type EscalationLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationLogCreateManyInput = {
    id?: number
    leadId: number
    agentId?: number | null
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationLogUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type conversationsCreateInput = {
    platform_thread_id: string
    status: string
    last_message_at: Date | string
    messages?: messagesCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: number
    platform_thread_id: string
    status: string
    last_message_at: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutConversationsInput
  }

  export type conversationsUpdateInput = {
    platform_thread_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    last_message_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_thread_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    last_message_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutConversationsNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: number
    platform_thread_id: string
    status: string
    last_message_at: Date | string
  }

  export type conversationsUpdateManyMutationInput = {
    platform_thread_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    last_message_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_thread_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    last_message_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intent_logsCreateInput = {
    sender_id: string
    message: string
    intent: string
    confidence: number
    reason: string
    escalated: boolean
    timestamp: Date | string
  }

  export type intent_logsUncheckedCreateInput = {
    id?: number
    sender_id: string
    message: string
    intent: string
    confidence: number
    reason: string
    escalated: boolean
    timestamp: Date | string
  }

  export type intent_logsUpdateInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    escalated?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intent_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    escalated?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intent_logsCreateManyInput = {
    id?: number
    sender_id: string
    message: string
    intent: string
    confidence: number
    reason: string
    escalated: boolean
    timestamp: Date | string
  }

  export type intent_logsUpdateManyMutationInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    escalated?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intent_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    escalated?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    sender: string
    content: string
    timestamp: Date | string
    conversations: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    conversation_id: number
    sender: string
    content: string
    timestamp: Date | string
  }

  export type messagesUpdateInput = {
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversation_id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyInput = {
    id?: number
    conversation_id: number
    sender: string
    content: string
    timestamp: Date | string
  }

  export type messagesUpdateManyMutationInput = {
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversation_id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type token_logsCreateInput = {
    sender_id: string
    model: string
    intent: string
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    timestamp: Date | string
  }

  export type token_logsUncheckedCreateInput = {
    id?: number
    sender_id: string
    model: string
    intent: string
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    timestamp: Date | string
  }

  export type token_logsUpdateInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    prompt_tokens?: IntFieldUpdateOperationsInput | number
    completion_tokens?: IntFieldUpdateOperationsInput | number
    total_tokens?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type token_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    prompt_tokens?: IntFieldUpdateOperationsInput | number
    completion_tokens?: IntFieldUpdateOperationsInput | number
    total_tokens?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type token_logsCreateManyInput = {
    id?: number
    sender_id: string
    model: string
    intent: string
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    timestamp: Date | string
  }

  export type token_logsUpdateManyMutationInput = {
    sender_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    prompt_tokens?: IntFieldUpdateOperationsInput | number
    completion_tokens?: IntFieldUpdateOperationsInput | number
    total_tokens?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type token_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    intent?: StringFieldUpdateOperationsInput | string
    prompt_tokens?: IntFieldUpdateOperationsInput | number
    completion_tokens?: IntFieldUpdateOperationsInput | number
    total_tokens?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type EscalationLogListRelationFilter = {
    every?: EscalationLogWhereInput
    some?: EscalationLogWhereInput
    none?: EscalationLogWhereInput
  }

  export type AgentNullableScalarRelationFilter = {
    is?: AgentWhereInput | null
    isNot?: AgentWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EscalationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    assignedAgentId?: SortOrder
    platform?: SortOrder
    sourceId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    id?: SortOrder
    assignedAgentId?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    assignedAgentId?: SortOrder
    platform?: SortOrder
    sourceId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    assignedAgentId?: SortOrder
    platform?: SortOrder
    sourceId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    id?: SortOrder
    assignedAgentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAgentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleFilter<$PrismaModel> | $Enums.AgentRole
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    isOnline?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    isOnline?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    isOnline?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAgentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleWithAggregatesFilter<$PrismaModel> | $Enums.AgentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentRoleFilter<$PrismaModel>
    _max?: NestedEnumAgentRoleFilter<$PrismaModel>
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    platform?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    platform?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    platform?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    confidence?: SortOrder
    intent?: SortOrder
    role?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    confidence?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    confidence?: SortOrder
    intent?: SortOrder
    role?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    confidence?: SortOrder
    intent?: SortOrder
    role?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    confidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    paidAt?: SortOrder
    razorpayLinkId?: SortOrder
    status?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    paidAt?: SortOrder
    razorpayLinkId?: SortOrder
    status?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    paidAt?: SortOrder
    razorpayLinkId?: SortOrder
    status?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EscalationLogCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    reason?: SortOrder
    escalatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EscalationLogAvgOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
  }

  export type EscalationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    reason?: SortOrder
    escalatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EscalationLogMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    reason?: SortOrder
    escalatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EscalationLogSumOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    platform_thread_id?: SortOrder
    status?: SortOrder
    last_message_at?: SortOrder
  }

  export type conversationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    platform_thread_id?: SortOrder
    status?: SortOrder
    last_message_at?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    platform_thread_id?: SortOrder
    status?: SortOrder
    last_message_at?: SortOrder
  }

  export type conversationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type intent_logsCountOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    escalated?: SortOrder
    timestamp?: SortOrder
  }

  export type intent_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    confidence?: SortOrder
  }

  export type intent_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    escalated?: SortOrder
    timestamp?: SortOrder
  }

  export type intent_logsMinOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    escalated?: SortOrder
    timestamp?: SortOrder
  }

  export type intent_logsSumOrderByAggregateInput = {
    id?: SortOrder
    confidence?: SortOrder
  }

  export type ConversationsScalarRelationFilter = {
    is?: conversationsWhereInput
    isNot?: conversationsWhereInput
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
    sender?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
    conversation_id?: SortOrder
  }

  export type token_logsCountOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    model?: SortOrder
    intent?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
    timestamp?: SortOrder
  }

  export type token_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
  }

  export type token_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    model?: SortOrder
    intent?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
    timestamp?: SortOrder
  }

  export type token_logsMinOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    model?: SortOrder
    intent?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
    timestamp?: SortOrder
  }

  export type token_logsSumOrderByAggregateInput = {
    id?: SortOrder
    prompt_tokens?: SortOrder
    completion_tokens?: SortOrder
    total_tokens?: SortOrder
  }

  export type ConversationCreateNestedManyWithoutLeadInput = {
    create?: XOR<ConversationCreateWithoutLeadInput, ConversationUncheckedCreateWithoutLeadInput> | ConversationCreateWithoutLeadInput[] | ConversationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutLeadInput | ConversationCreateOrConnectWithoutLeadInput[]
    createMany?: ConversationCreateManyLeadInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EscalationLogCreateNestedManyWithoutLeadInput = {
    create?: XOR<EscalationLogCreateWithoutLeadInput, EscalationLogUncheckedCreateWithoutLeadInput> | EscalationLogCreateWithoutLeadInput[] | EscalationLogUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutLeadInput | EscalationLogCreateOrConnectWithoutLeadInput[]
    createMany?: EscalationLogCreateManyLeadInputEnvelope
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
  }

  export type AgentCreateNestedOneWithoutLeadsInput = {
    create?: XOR<AgentCreateWithoutLeadsInput, AgentUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutLeadsInput
    connect?: AgentWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLeadInput = {
    create?: XOR<PaymentCreateWithoutLeadInput, PaymentUncheckedCreateWithoutLeadInput> | PaymentCreateWithoutLeadInput[] | PaymentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeadInput | PaymentCreateOrConnectWithoutLeadInput[]
    createMany?: PaymentCreateManyLeadInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<ConversationCreateWithoutLeadInput, ConversationUncheckedCreateWithoutLeadInput> | ConversationCreateWithoutLeadInput[] | ConversationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutLeadInput | ConversationCreateOrConnectWithoutLeadInput[]
    createMany?: ConversationCreateManyLeadInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EscalationLogUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<EscalationLogCreateWithoutLeadInput, EscalationLogUncheckedCreateWithoutLeadInput> | EscalationLogCreateWithoutLeadInput[] | EscalationLogUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutLeadInput | EscalationLogCreateOrConnectWithoutLeadInput[]
    createMany?: EscalationLogCreateManyLeadInputEnvelope
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<PaymentCreateWithoutLeadInput, PaymentUncheckedCreateWithoutLeadInput> | PaymentCreateWithoutLeadInput[] | PaymentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeadInput | PaymentCreateOrConnectWithoutLeadInput[]
    createMany?: PaymentCreateManyLeadInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type ConversationUpdateManyWithoutLeadNestedInput = {
    create?: XOR<ConversationCreateWithoutLeadInput, ConversationUncheckedCreateWithoutLeadInput> | ConversationCreateWithoutLeadInput[] | ConversationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutLeadInput | ConversationCreateOrConnectWithoutLeadInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutLeadInput | ConversationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: ConversationCreateManyLeadInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutLeadInput | ConversationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutLeadInput | ConversationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type EscalationLogUpdateManyWithoutLeadNestedInput = {
    create?: XOR<EscalationLogCreateWithoutLeadInput, EscalationLogUncheckedCreateWithoutLeadInput> | EscalationLogCreateWithoutLeadInput[] | EscalationLogUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutLeadInput | EscalationLogCreateOrConnectWithoutLeadInput[]
    upsert?: EscalationLogUpsertWithWhereUniqueWithoutLeadInput | EscalationLogUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: EscalationLogCreateManyLeadInputEnvelope
    set?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    disconnect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    delete?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    update?: EscalationLogUpdateWithWhereUniqueWithoutLeadInput | EscalationLogUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: EscalationLogUpdateManyWithWhereWithoutLeadInput | EscalationLogUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: EscalationLogScalarWhereInput | EscalationLogScalarWhereInput[]
  }

  export type AgentUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<AgentCreateWithoutLeadsInput, AgentUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutLeadsInput
    upsert?: AgentUpsertWithoutLeadsInput
    disconnect?: AgentWhereInput | boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutLeadsInput, AgentUpdateWithoutLeadsInput>, AgentUncheckedUpdateWithoutLeadsInput>
  }

  export type PaymentUpdateManyWithoutLeadNestedInput = {
    create?: XOR<PaymentCreateWithoutLeadInput, PaymentUncheckedCreateWithoutLeadInput> | PaymentCreateWithoutLeadInput[] | PaymentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeadInput | PaymentCreateOrConnectWithoutLeadInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeadInput | PaymentUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: PaymentCreateManyLeadInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeadInput | PaymentUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeadInput | PaymentUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConversationUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<ConversationCreateWithoutLeadInput, ConversationUncheckedCreateWithoutLeadInput> | ConversationCreateWithoutLeadInput[] | ConversationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutLeadInput | ConversationCreateOrConnectWithoutLeadInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutLeadInput | ConversationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: ConversationCreateManyLeadInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutLeadInput | ConversationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutLeadInput | ConversationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type EscalationLogUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<EscalationLogCreateWithoutLeadInput, EscalationLogUncheckedCreateWithoutLeadInput> | EscalationLogCreateWithoutLeadInput[] | EscalationLogUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutLeadInput | EscalationLogCreateOrConnectWithoutLeadInput[]
    upsert?: EscalationLogUpsertWithWhereUniqueWithoutLeadInput | EscalationLogUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: EscalationLogCreateManyLeadInputEnvelope
    set?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    disconnect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    delete?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    update?: EscalationLogUpdateWithWhereUniqueWithoutLeadInput | EscalationLogUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: EscalationLogUpdateManyWithWhereWithoutLeadInput | EscalationLogUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: EscalationLogScalarWhereInput | EscalationLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<PaymentCreateWithoutLeadInput, PaymentUncheckedCreateWithoutLeadInput> | PaymentCreateWithoutLeadInput[] | PaymentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeadInput | PaymentCreateOrConnectWithoutLeadInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeadInput | PaymentUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: PaymentCreateManyLeadInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeadInput | PaymentUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeadInput | PaymentUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ConversationCreateNestedManyWithoutAgentInput = {
    create?: XOR<ConversationCreateWithoutAgentInput, ConversationUncheckedCreateWithoutAgentInput> | ConversationCreateWithoutAgentInput[] | ConversationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAgentInput | ConversationCreateOrConnectWithoutAgentInput[]
    createMany?: ConversationCreateManyAgentInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EscalationLogCreateNestedManyWithoutAgentInput = {
    create?: XOR<EscalationLogCreateWithoutAgentInput, EscalationLogUncheckedCreateWithoutAgentInput> | EscalationLogCreateWithoutAgentInput[] | EscalationLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutAgentInput | EscalationLogCreateOrConnectWithoutAgentInput[]
    createMany?: EscalationLogCreateManyAgentInputEnvelope
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutAgentInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<ConversationCreateWithoutAgentInput, ConversationUncheckedCreateWithoutAgentInput> | ConversationCreateWithoutAgentInput[] | ConversationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAgentInput | ConversationCreateOrConnectWithoutAgentInput[]
    createMany?: ConversationCreateManyAgentInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EscalationLogUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<EscalationLogCreateWithoutAgentInput, EscalationLogUncheckedCreateWithoutAgentInput> | EscalationLogCreateWithoutAgentInput[] | EscalationLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutAgentInput | EscalationLogCreateOrConnectWithoutAgentInput[]
    createMany?: EscalationLogCreateManyAgentInputEnvelope
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAgentRoleFieldUpdateOperationsInput = {
    set?: $Enums.AgentRole
  }

  export type ConversationUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ConversationCreateWithoutAgentInput, ConversationUncheckedCreateWithoutAgentInput> | ConversationCreateWithoutAgentInput[] | ConversationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAgentInput | ConversationCreateOrConnectWithoutAgentInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutAgentInput | ConversationUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ConversationCreateManyAgentInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutAgentInput | ConversationUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutAgentInput | ConversationUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type EscalationLogUpdateManyWithoutAgentNestedInput = {
    create?: XOR<EscalationLogCreateWithoutAgentInput, EscalationLogUncheckedCreateWithoutAgentInput> | EscalationLogCreateWithoutAgentInput[] | EscalationLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutAgentInput | EscalationLogCreateOrConnectWithoutAgentInput[]
    upsert?: EscalationLogUpsertWithWhereUniqueWithoutAgentInput | EscalationLogUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: EscalationLogCreateManyAgentInputEnvelope
    set?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    disconnect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    delete?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    update?: EscalationLogUpdateWithWhereUniqueWithoutAgentInput | EscalationLogUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: EscalationLogUpdateManyWithWhereWithoutAgentInput | EscalationLogUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: EscalationLogScalarWhereInput | EscalationLogScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAgentInput | LeadUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAgentInput | LeadUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAgentInput | LeadUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ConversationCreateWithoutAgentInput, ConversationUncheckedCreateWithoutAgentInput> | ConversationCreateWithoutAgentInput[] | ConversationUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAgentInput | ConversationCreateOrConnectWithoutAgentInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutAgentInput | ConversationUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ConversationCreateManyAgentInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutAgentInput | ConversationUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutAgentInput | ConversationUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type EscalationLogUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<EscalationLogCreateWithoutAgentInput, EscalationLogUncheckedCreateWithoutAgentInput> | EscalationLogCreateWithoutAgentInput[] | EscalationLogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: EscalationLogCreateOrConnectWithoutAgentInput | EscalationLogCreateOrConnectWithoutAgentInput[]
    upsert?: EscalationLogUpsertWithWhereUniqueWithoutAgentInput | EscalationLogUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: EscalationLogCreateManyAgentInputEnvelope
    set?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    disconnect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    delete?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    connect?: EscalationLogWhereUniqueInput | EscalationLogWhereUniqueInput[]
    update?: EscalationLogUpdateWithWhereUniqueWithoutAgentInput | EscalationLogUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: EscalationLogUpdateManyWithWhereWithoutAgentInput | EscalationLogUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: EscalationLogScalarWhereInput | EscalationLogScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAgentInput | LeadUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAgentInput | LeadUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAgentInput | LeadUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutConversationsInput = {
    create?: XOR<AgentCreateWithoutConversationsInput, AgentUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutConversationsInput
    connect?: AgentWhereUniqueInput
  }

  export type LeadCreateNestedOneWithoutConversationsInput = {
    create?: XOR<LeadCreateWithoutConversationsInput, LeadUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutConversationsInput
    connect?: LeadWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AgentUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<AgentCreateWithoutConversationsInput, AgentUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutConversationsInput
    upsert?: AgentUpsertWithoutConversationsInput
    disconnect?: AgentWhereInput | boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutConversationsInput, AgentUpdateWithoutConversationsInput>, AgentUncheckedUpdateWithoutConversationsInput>
  }

  export type LeadUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<LeadCreateWithoutConversationsInput, LeadUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutConversationsInput
    upsert?: LeadUpsertWithoutConversationsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutConversationsInput, LeadUpdateWithoutConversationsInput>, LeadUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.MessageRole
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type LeadCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LeadCreateWithoutPaymentsInput, LeadUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutPaymentsInput
    connect?: LeadWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type LeadUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<LeadCreateWithoutPaymentsInput, LeadUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutPaymentsInput
    upsert?: LeadUpsertWithoutPaymentsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutPaymentsInput, LeadUpdateWithoutPaymentsInput>, LeadUncheckedUpdateWithoutPaymentsInput>
  }

  export type AgentCreateNestedOneWithoutEscalationsInput = {
    create?: XOR<AgentCreateWithoutEscalationsInput, AgentUncheckedCreateWithoutEscalationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutEscalationsInput
    connect?: AgentWhereUniqueInput
  }

  export type LeadCreateNestedOneWithoutEscalationsInput = {
    create?: XOR<LeadCreateWithoutEscalationsInput, LeadUncheckedCreateWithoutEscalationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutEscalationsInput
    connect?: LeadWhereUniqueInput
  }

  export type AgentUpdateOneWithoutEscalationsNestedInput = {
    create?: XOR<AgentCreateWithoutEscalationsInput, AgentUncheckedCreateWithoutEscalationsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutEscalationsInput
    upsert?: AgentUpsertWithoutEscalationsInput
    disconnect?: AgentWhereInput | boolean
    delete?: AgentWhereInput | boolean
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutEscalationsInput, AgentUpdateWithoutEscalationsInput>, AgentUncheckedUpdateWithoutEscalationsInput>
  }

  export type LeadUpdateOneRequiredWithoutEscalationsNestedInput = {
    create?: XOR<LeadCreateWithoutEscalationsInput, LeadUncheckedCreateWithoutEscalationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutEscalationsInput
    upsert?: LeadUpsertWithoutEscalationsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutEscalationsInput, LeadUpdateWithoutEscalationsInput>, LeadUncheckedUpdateWithoutEscalationsInput>
  }

  export type messagesCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput> | messagesCreateWithoutConversationsInput[] | messagesUncheckedCreateWithoutConversationsInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput | messagesCreateOrConnectWithoutConversationsInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationsInput | messagesUpsertWithWhereUniqueWithoutConversationsInput[]
    createMany?: messagesCreateManyConversationsInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationsInput | messagesUpdateWithWhereUniqueWithoutConversationsInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationsInput | messagesUpdateManyWithWhereWithoutConversationsInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
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

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAgentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleFilter<$PrismaModel> | $Enums.AgentRole
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAgentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentRole | EnumAgentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentRole[] | ListEnumAgentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentRoleWithAggregatesFilter<$PrismaModel> | $Enums.AgentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentRoleFilter<$PrismaModel>
    _max?: NestedEnumAgentRoleFilter<$PrismaModel>
  }

  export type NestedEnumMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleFilter<$PrismaModel> | $Enums.MessageRole
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageRole | EnumMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageRole[] | ListEnumMessageRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.MessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumMessageRoleFilter<$PrismaModel>
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

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ConversationCreateWithoutLeadInput = {
    status?: string
    createdAt?: Date | string
    platform: string
    agent?: AgentCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutLeadInput = {
    id?: number
    agentId?: number | null
    status?: string
    createdAt?: Date | string
    platform: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutLeadInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutLeadInput, ConversationUncheckedCreateWithoutLeadInput>
  }

  export type ConversationCreateManyLeadInputEnvelope = {
    data: ConversationCreateManyLeadInput | ConversationCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type EscalationLogCreateWithoutLeadInput = {
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
    agent?: AgentCreateNestedOneWithoutEscalationsInput
  }

  export type EscalationLogUncheckedCreateWithoutLeadInput = {
    id?: number
    agentId?: number | null
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationLogCreateOrConnectWithoutLeadInput = {
    where: EscalationLogWhereUniqueInput
    create: XOR<EscalationLogCreateWithoutLeadInput, EscalationLogUncheckedCreateWithoutLeadInput>
  }

  export type EscalationLogCreateManyLeadInputEnvelope = {
    data: EscalationLogCreateManyLeadInput | EscalationLogCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type AgentCreateWithoutLeadsInput = {
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    conversations?: ConversationCreateNestedManyWithoutAgentInput
    escalations?: EscalationLogCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutLeadsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    conversations?: ConversationUncheckedCreateNestedManyWithoutAgentInput
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutLeadsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutLeadsInput, AgentUncheckedCreateWithoutLeadsInput>
  }

  export type PaymentCreateWithoutLeadInput = {
    amount: number
    createdAt?: Date | string
    currency?: string
    paidAt?: Date | string | null
    razorpayLinkId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutLeadInput = {
    id?: number
    amount: number
    createdAt?: Date | string
    currency?: string
    paidAt?: Date | string | null
    razorpayLinkId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutLeadInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutLeadInput, PaymentUncheckedCreateWithoutLeadInput>
  }

  export type PaymentCreateManyLeadInputEnvelope = {
    data: PaymentCreateManyLeadInput | PaymentCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithWhereUniqueWithoutLeadInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutLeadInput, ConversationUncheckedUpdateWithoutLeadInput>
    create: XOR<ConversationCreateWithoutLeadInput, ConversationUncheckedCreateWithoutLeadInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutLeadInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutLeadInput, ConversationUncheckedUpdateWithoutLeadInput>
  }

  export type ConversationUpdateManyWithWhereWithoutLeadInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutLeadInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: IntFilter<"Conversation"> | number
    leadId?: IntFilter<"Conversation"> | number
    agentId?: IntNullableFilter<"Conversation"> | number | null
    status?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    platform?: StringFilter<"Conversation"> | string
  }

  export type EscalationLogUpsertWithWhereUniqueWithoutLeadInput = {
    where: EscalationLogWhereUniqueInput
    update: XOR<EscalationLogUpdateWithoutLeadInput, EscalationLogUncheckedUpdateWithoutLeadInput>
    create: XOR<EscalationLogCreateWithoutLeadInput, EscalationLogUncheckedCreateWithoutLeadInput>
  }

  export type EscalationLogUpdateWithWhereUniqueWithoutLeadInput = {
    where: EscalationLogWhereUniqueInput
    data: XOR<EscalationLogUpdateWithoutLeadInput, EscalationLogUncheckedUpdateWithoutLeadInput>
  }

  export type EscalationLogUpdateManyWithWhereWithoutLeadInput = {
    where: EscalationLogScalarWhereInput
    data: XOR<EscalationLogUpdateManyMutationInput, EscalationLogUncheckedUpdateManyWithoutLeadInput>
  }

  export type EscalationLogScalarWhereInput = {
    AND?: EscalationLogScalarWhereInput | EscalationLogScalarWhereInput[]
    OR?: EscalationLogScalarWhereInput[]
    NOT?: EscalationLogScalarWhereInput | EscalationLogScalarWhereInput[]
    id?: IntFilter<"EscalationLog"> | number
    leadId?: IntFilter<"EscalationLog"> | number
    agentId?: IntNullableFilter<"EscalationLog"> | number | null
    reason?: StringFilter<"EscalationLog"> | string
    escalatedAt?: DateTimeFilter<"EscalationLog"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"EscalationLog"> | Date | string | null
  }

  export type AgentUpsertWithoutLeadsInput = {
    update: XOR<AgentUpdateWithoutLeadsInput, AgentUncheckedUpdateWithoutLeadsInput>
    create: XOR<AgentCreateWithoutLeadsInput, AgentUncheckedCreateWithoutLeadsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutLeadsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutLeadsInput, AgentUncheckedUpdateWithoutLeadsInput>
  }

  export type AgentUpdateWithoutLeadsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    conversations?: ConversationUpdateManyWithoutAgentNestedInput
    escalations?: EscalationLogUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutLeadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    conversations?: ConversationUncheckedUpdateManyWithoutAgentNestedInput
    escalations?: EscalationLogUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutLeadInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutLeadInput, PaymentUncheckedUpdateWithoutLeadInput>
    create: XOR<PaymentCreateWithoutLeadInput, PaymentUncheckedCreateWithoutLeadInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutLeadInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutLeadInput, PaymentUncheckedUpdateWithoutLeadInput>
  }

  export type PaymentUpdateManyWithWhereWithoutLeadInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutLeadInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    leadId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    currency?: StringFilter<"Payment"> | string
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    razorpayLinkId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
  }

  export type ConversationCreateWithoutAgentInput = {
    status?: string
    createdAt?: Date | string
    platform: string
    lead: LeadCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutAgentInput = {
    id?: number
    leadId: number
    status?: string
    createdAt?: Date | string
    platform: string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutAgentInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutAgentInput, ConversationUncheckedCreateWithoutAgentInput>
  }

  export type ConversationCreateManyAgentInputEnvelope = {
    data: ConversationCreateManyAgentInput | ConversationCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type EscalationLogCreateWithoutAgentInput = {
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
    lead: LeadCreateNestedOneWithoutEscalationsInput
  }

  export type EscalationLogUncheckedCreateWithoutAgentInput = {
    id?: number
    leadId: number
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EscalationLogCreateOrConnectWithoutAgentInput = {
    where: EscalationLogWhereUniqueInput
    create: XOR<EscalationLogCreateWithoutAgentInput, EscalationLogUncheckedCreateWithoutAgentInput>
  }

  export type EscalationLogCreateManyAgentInputEnvelope = {
    data: EscalationLogCreateManyAgentInput | EscalationLogCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutAgentInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutLeadInput
    escalations?: EscalationLogCreateNestedManyWithoutLeadInput
    payments?: PaymentCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutAgentInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutLeadInput
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutLeadInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutAgentInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput>
  }

  export type LeadCreateManyAgentInputEnvelope = {
    data: LeadCreateManyAgentInput | LeadCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithWhereUniqueWithoutAgentInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutAgentInput, ConversationUncheckedUpdateWithoutAgentInput>
    create: XOR<ConversationCreateWithoutAgentInput, ConversationUncheckedCreateWithoutAgentInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutAgentInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutAgentInput, ConversationUncheckedUpdateWithoutAgentInput>
  }

  export type ConversationUpdateManyWithWhereWithoutAgentInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutAgentInput>
  }

  export type EscalationLogUpsertWithWhereUniqueWithoutAgentInput = {
    where: EscalationLogWhereUniqueInput
    update: XOR<EscalationLogUpdateWithoutAgentInput, EscalationLogUncheckedUpdateWithoutAgentInput>
    create: XOR<EscalationLogCreateWithoutAgentInput, EscalationLogUncheckedCreateWithoutAgentInput>
  }

  export type EscalationLogUpdateWithWhereUniqueWithoutAgentInput = {
    where: EscalationLogWhereUniqueInput
    data: XOR<EscalationLogUpdateWithoutAgentInput, EscalationLogUncheckedUpdateWithoutAgentInput>
  }

  export type EscalationLogUpdateManyWithWhereWithoutAgentInput = {
    where: EscalationLogScalarWhereInput
    data: XOR<EscalationLogUpdateManyMutationInput, EscalationLogUncheckedUpdateManyWithoutAgentInput>
  }

  export type LeadUpsertWithWhereUniqueWithoutAgentInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutAgentInput, LeadUncheckedUpdateWithoutAgentInput>
    create: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutAgentInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutAgentInput, LeadUncheckedUpdateWithoutAgentInput>
  }

  export type LeadUpdateManyWithWhereWithoutAgentInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutAgentInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: IntFilter<"Lead"> | number
    name?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    assignedAgentId?: IntNullableFilter<"Lead"> | number | null
    platform?: StringFilter<"Lead"> | string
    sourceId?: StringFilter<"Lead"> | string
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type AgentCreateWithoutConversationsInput = {
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    escalations?: EscalationLogCreateNestedManyWithoutAgentInput
    leads?: LeadCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutConversationsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutAgentInput
    leads?: LeadUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutConversationsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutConversationsInput, AgentUncheckedCreateWithoutConversationsInput>
  }

  export type LeadCreateWithoutConversationsInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    escalations?: EscalationLogCreateNestedManyWithoutLeadInput
    agent?: AgentCreateNestedOneWithoutLeadsInput
    payments?: PaymentCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutConversationsInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignedAgentId?: number | null
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutLeadInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutConversationsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutConversationsInput, LeadUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    content: string
    createdAt?: Date | string
    confidence?: number | null
    intent?: string | null
    role?: $Enums.MessageRole
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    content: string
    createdAt?: Date | string
    confidence?: number | null
    intent?: string | null
    role?: $Enums.MessageRole
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type AgentUpsertWithoutConversationsInput = {
    update: XOR<AgentUpdateWithoutConversationsInput, AgentUncheckedUpdateWithoutConversationsInput>
    create: XOR<AgentCreateWithoutConversationsInput, AgentUncheckedCreateWithoutConversationsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutConversationsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutConversationsInput, AgentUncheckedUpdateWithoutConversationsInput>
  }

  export type AgentUpdateWithoutConversationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    escalations?: EscalationLogUpdateManyWithoutAgentNestedInput
    leads?: LeadUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    escalations?: EscalationLogUncheckedUpdateManyWithoutAgentNestedInput
    leads?: LeadUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type LeadUpsertWithoutConversationsInput = {
    update: XOR<LeadUpdateWithoutConversationsInput, LeadUncheckedUpdateWithoutConversationsInput>
    create: XOR<LeadCreateWithoutConversationsInput, LeadUncheckedCreateWithoutConversationsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutConversationsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutConversationsInput, LeadUncheckedUpdateWithoutConversationsInput>
  }

  export type LeadUpdateWithoutConversationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escalations?: EscalationLogUpdateManyWithoutLeadNestedInput
    agent?: AgentUpdateOneWithoutLeadsNestedInput
    payments?: PaymentUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAgentId?: NullableIntFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    escalations?: EscalationLogUncheckedUpdateManyWithoutLeadNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    confidence?: FloatNullableFilter<"Message"> | number | null
    intent?: StringNullableFilter<"Message"> | string | null
    role?: EnumMessageRoleFilter<"Message"> | $Enums.MessageRole
  }

  export type ConversationCreateWithoutMessagesInput = {
    status?: string
    createdAt?: Date | string
    platform: string
    agent?: AgentCreateNestedOneWithoutConversationsInput
    lead: LeadCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    leadId: number
    agentId?: number | null
    status?: string
    createdAt?: Date | string
    platform: string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneWithoutConversationsNestedInput
    lead?: LeadUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LeadCreateWithoutPaymentsInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutLeadInput
    escalations?: EscalationLogCreateNestedManyWithoutLeadInput
    agent?: AgentCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutPaymentsInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignedAgentId?: number | null
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutLeadInput
    escalations?: EscalationLogUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutPaymentsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutPaymentsInput, LeadUncheckedCreateWithoutPaymentsInput>
  }

  export type LeadUpsertWithoutPaymentsInput = {
    update: XOR<LeadUpdateWithoutPaymentsInput, LeadUncheckedUpdateWithoutPaymentsInput>
    create: XOR<LeadCreateWithoutPaymentsInput, LeadUncheckedCreateWithoutPaymentsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutPaymentsInput, LeadUncheckedUpdateWithoutPaymentsInput>
  }

  export type LeadUpdateWithoutPaymentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutLeadNestedInput
    escalations?: EscalationLogUpdateManyWithoutLeadNestedInput
    agent?: AgentUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAgentId?: NullableIntFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutLeadNestedInput
    escalations?: EscalationLogUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type AgentCreateWithoutEscalationsInput = {
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    conversations?: ConversationCreateNestedManyWithoutAgentInput
    leads?: LeadCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutEscalationsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    email: string
    isOnline?: boolean
    passwordHash: string
    role?: $Enums.AgentRole
    conversations?: ConversationUncheckedCreateNestedManyWithoutAgentInput
    leads?: LeadUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutEscalationsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutEscalationsInput, AgentUncheckedCreateWithoutEscalationsInput>
  }

  export type LeadCreateWithoutEscalationsInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutLeadInput
    agent?: AgentCreateNestedOneWithoutLeadsInput
    payments?: PaymentCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutEscalationsInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    assignedAgentId?: number | null
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutLeadInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutEscalationsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutEscalationsInput, LeadUncheckedCreateWithoutEscalationsInput>
  }

  export type AgentUpsertWithoutEscalationsInput = {
    update: XOR<AgentUpdateWithoutEscalationsInput, AgentUncheckedUpdateWithoutEscalationsInput>
    create: XOR<AgentCreateWithoutEscalationsInput, AgentUncheckedCreateWithoutEscalationsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutEscalationsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutEscalationsInput, AgentUncheckedUpdateWithoutEscalationsInput>
  }

  export type AgentUpdateWithoutEscalationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    conversations?: ConversationUpdateManyWithoutAgentNestedInput
    leads?: LeadUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutEscalationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAgentRoleFieldUpdateOperationsInput | $Enums.AgentRole
    conversations?: ConversationUncheckedUpdateManyWithoutAgentNestedInput
    leads?: LeadUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type LeadUpsertWithoutEscalationsInput = {
    update: XOR<LeadUpdateWithoutEscalationsInput, LeadUncheckedUpdateWithoutEscalationsInput>
    create: XOR<LeadCreateWithoutEscalationsInput, LeadUncheckedCreateWithoutEscalationsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutEscalationsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutEscalationsInput, LeadUncheckedUpdateWithoutEscalationsInput>
  }

  export type LeadUpdateWithoutEscalationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutLeadNestedInput
    agent?: AgentUpdateOneWithoutLeadsNestedInput
    payments?: PaymentUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutEscalationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAgentId?: NullableIntFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutLeadNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type messagesCreateWithoutConversationsInput = {
    sender: string
    content: string
    timestamp: Date | string
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    id?: number
    sender: string
    content: string
    timestamp: Date | string
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateManyConversationsInputEnvelope = {
    data: messagesCreateManyConversationsInput | messagesCreateManyConversationsInput[]
    skipDuplicates?: boolean
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationsInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationsInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: IntFilter<"messages"> | number
    conversation_id?: IntFilter<"messages"> | number
    sender?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    timestamp?: DateTimeFilter<"messages"> | Date | string
  }

  export type conversationsCreateWithoutMessagesInput = {
    platform_thread_id: string
    status: string
    last_message_at: Date | string
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: number
    platform_thread_id: string
    status: string
    last_message_at: Date | string
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    platform_thread_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    last_message_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_thread_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    last_message_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateManyLeadInput = {
    id?: number
    agentId?: number | null
    status?: string
    createdAt?: Date | string
    platform: string
  }

  export type EscalationLogCreateManyLeadInput = {
    id?: number
    agentId?: number | null
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type PaymentCreateManyLeadInput = {
    id?: number
    amount: number
    createdAt?: Date | string
    currency?: string
    paidAt?: Date | string | null
    razorpayLinkId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type ConversationUpdateWithoutLeadInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EscalationLogUpdateWithoutLeadInput = {
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agent?: AgentUpdateOneWithoutEscalationsNestedInput
  }

  export type EscalationLogUncheckedUpdateWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationLogUncheckedUpdateManyWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutLeadInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutLeadInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razorpayLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ConversationCreateManyAgentInput = {
    id?: number
    leadId: number
    status?: string
    createdAt?: Date | string
    platform: string
  }

  export type EscalationLogCreateManyAgentInput = {
    id?: number
    leadId: number
    reason: string
    escalatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type LeadCreateManyAgentInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    platform: string
    sourceId: string
    status?: $Enums.LeadStatus
    updatedAt?: Date | string
  }

  export type ConversationUpdateWithoutAgentInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EscalationLogUpdateWithoutAgentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lead?: LeadUpdateOneRequiredWithoutEscalationsNestedInput
  }

  export type EscalationLogUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EscalationLogUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    leadId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    escalatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeadUpdateWithoutAgentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutLeadNestedInput
    escalations?: EscalationLogUpdateManyWithoutLeadNestedInput
    payments?: PaymentUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutLeadNestedInput
    escalations?: EscalationLogUncheckedUpdateManyWithoutLeadNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: number
    content: string
    createdAt?: Date | string
    confidence?: number | null
    intent?: string | null
    role?: $Enums.MessageRole
  }

  export type MessageUpdateWithoutConversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole
  }

  export type messagesCreateManyConversationsInput = {
    id?: number
    sender: string
    content: string
    timestamp: Date | string
  }

  export type messagesUpdateWithoutConversationsInput = {
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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