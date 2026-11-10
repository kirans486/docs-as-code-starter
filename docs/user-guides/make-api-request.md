---
id: make-api-request
title: Make an API Request
sidebar_label: Make an API Request
sidebar_position: 3
description: Learn how to invoke an API using an access token.
---

# Make an API Request

## Overview

After registering an API and generating an access token, you can invoke the API using an HTTP client.

This guide explains how to send an authenticated API request using cURL.

## Before you begin

Ensure that you have:

- A registered API in APIConnect.
- A valid API access token.
- The API endpoint URL.
- cURL installed on your system.

## API details

The following example uses a fictional Customer Profile API.

| Parameter | Value |
|---|---|
| API Name | Customer Profile API |
| API Version | 1.0 |
| HTTP Method | GET |
| Endpoint | `/customers/1001` |
| Authentication | Bearer Token |

## Procedure

### Step 1: Obtain the API access token

Generate an API token using the [Create an API Token](./create-api-token.md) procedure.

For this example, use the placeholder `YOUR_ACCESS_TOKEN`.

### Step 2: Prepare the API request

Use the following cURL command:

```bash
curl --request GET \
  --url https://api.apiconnect.example.com/v1/customers/1001 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

### Step 3: Execute the request

Run the command in your terminal.

The APIConnect platform validates the access token and forwards the request to the configured API endpoint.

### Step 4: Review the response

A successful request returns an HTTP `200 OK` response.

Example response:

```json
{
  "customerId": "1001",
  "customerName": "John Smith",
  "email": "john.smith@example.com",
  "status": "Active"
}
```

## Response codes

The following table describes common HTTP response codes.

| HTTP Status | Description | Recommended action |
|---|---|---|
| 200 | Request successful | Review the response data |
| 400 | Invalid request | Verify request parameters |
| 401 | Unauthorized | Check the access token |
| 403 | Access forbidden | Verify token permissions |
| 404 | Resource not found | Check the API endpoint |
| 500 | Internal server error | Contact the API administrator |

## Troubleshooting

### 401 Unauthorized

**Cause:** The access token may be invalid, expired or missing.

**Resolution:**

1. Verify that the Authorization header is present.
2. Check that the token is valid.
3. Generate a new token if the existing token has expired.

### 403 Forbidden

**Cause:** The token does not have the required permissions.

**Resolution:**

1. Review the token permissions.
2. Contact the API administrator if additional access is required.

### 404 Not Found

**Cause:** The requested API endpoint or resource does not exist.

**Resolution:**

1. Verify the API base path.
2. Check the resource identifier.
3. Confirm that the API version is correct.

:::tip
Use Postman or cURL to test API requests during development. Never include actual access tokens in documentation examples.
:::

## Related information

- [Register an API](./register-api.md)
- [Create an API Token](./create-api-token.md)
