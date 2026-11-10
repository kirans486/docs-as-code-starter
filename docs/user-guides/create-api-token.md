---
id: create-api-token
title: Create an API Token
sidebar_label: Create an API Token
sidebar_position: 2
description: Learn how to generate and manage API access tokens.
---

# Create an API Token

## Overview

APIConnect uses access tokens to authenticate API requests and control access to registered APIs.

Administrators and authorized developers can generate API tokens from the platform. Each token is associated with an application and has a defined validity period.

## Before you begin

Ensure that you have:

- Access to the APIConnect platform.
- An active user account.
- Permission to generate API tokens.
- A registered API or application.

## Procedure

1. Sign in to the APIConnect platform.
2. Navigate to **Security and Access**.
3. Select **API Tokens**.
4. Click **Generate Token**.
5. Enter the token details.

| Field | Description | Example |
|---|---|---|
| Token Name | Name used to identify the token | CustomerAppToken |
| Application | Application associated with the token | Customer Portal |
| Expiration | Token validity period | 30 days |
| Permissions | Access permissions assigned to the token | Read |

6. Select **Generate**.

7. Copy the generated token and store it securely.

:::warning
Copy and store the token securely when it is generated. Do not share access tokens through email, chat messages or public repositories.
:::

## Expected result

The APIConnect platform generates an access token with the selected permissions and expiration period.

## Verify the token

1. Navigate to **Security and Access**.
2. Open **API Tokens**.
3. Locate the newly generated token.
4. Verify its name, application, permissions and expiration date.

## Manage API tokens

You can manage existing tokens using the following actions:

| Action | Description |
|---|---|
| View | Review token details and status |
| Revoke | Disable a token that is no longer required |
| Regenerate | Generate a replacement token |

:::tip
Use separate tokens for different applications. Revoke tokens immediately when they are no longer required.
:::

## Related information

- [Register an API](./register-api.md)
- [Make an API Request](./make-api-request.md)
