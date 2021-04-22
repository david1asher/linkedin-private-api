**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/core/login"](../modules/_src_core_login_.md) / Login

# Class: Login

## Hierarchy

- **Login**

## Index

### Constructors

- [constructor](_src_core_login_.login.md#constructor)

### Methods

- [userPass](_src_core_login_.login.md#userpass)

## Constructors

### constructor

\+ **new Login**(`__namedParameters`: { client: [Client](_src_core_client_.client.md) }): [Login](_src_core_login_.login.md)

_Defined in [src/core/login.ts:23](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/core/login.ts#L23)_

#### Parameters:

| Name                | Type                                              |
| ------------------- | ------------------------------------------------- |
| `__namedParameters` | { client: [Client](_src_core_client_.client.md) } |

**Returns:** [Login](_src_core_login_.login.md)

## Methods

### userPass

▸ **userPass**(`__namedParameters`: { password: undefined \| string ; useCache: boolean = true; username: string }): Promise<[Client](_src_core_client_.client.md)\>

_Defined in [src/core/login.ts:39](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/core/login.ts#L39)_

#### Parameters:

| Name                | Type                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| `__namedParameters` | { password: undefined \| string ; useCache: boolean = true; username: string } |

**Returns:** Promise<[Client](_src_core_client_.client.md)\>
