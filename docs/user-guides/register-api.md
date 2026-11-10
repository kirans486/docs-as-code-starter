---
id: register-api
title: Register an API
sidebar_label: Register an API
sidebar_position: 1
description: Learn how to register a new API in the APIConnect catalog.
---

# Register an API

## Overview

APIConnect allows administrators to register APIs in a centralized catalog. Registered APIs can be configured, managed and published for consumption by developers.

## Before you begin

Ensure that you have:

- Access to the APIConnect platform.
- API Administrator or equivalent permissions.
- API name and version.
- API endpoint URL.
- API description and ownership details.

## Procedure

1. Sign in to the APIConnect platform.
2. Navigate to **API Catalog**.

   ![API Catalog showing registered APIs](/img/user-guides/api-catalog.png)
3. Select **Register API**.
4. Enter the API details.

   ![Register API form with API configuration fields](/img/user-guides/register-api-form.png)

  | Field | Description | Example |
  |---|---|---|
  | API Name | Name of the API | Customer Profile API |
  | Version | API version | 1.0 |
  | Base Path | API endpoint path | /customers |
  | Environment | Deployment environment | Development |
  | Description | Brief API description | Retrieves customer information |

5. Select **Save** to register the API.

## Expected result

The API is registered successfully and appears in the API Catalog.

## Verify the registration

1. Navigate to **API Catalog**.
2. Search for the registered API.
3. Verify the API name, version and base path.

:::tip
Use a consistent API naming and versioning convention when registering APIs.
:::

## Related information

- [Create an API Token](./create-api-token.md)
- [Make an API Request](./make-api-request.md)
