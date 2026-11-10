---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 3
description: Get started with APIConnect by registering an API and sending your first API request.
---

# Quick Start

## Overview

This guide walks you through the basic steps required to use APIConnect.

You will register an API, generate an access token and send an authenticated API request using cURL.

By the end of this guide, you will understand the basic APIConnect workflow.

## Before you begin

Ensure that you have:

- Access to the APIConnect platform.
- Permission to register APIs.
- Permission to generate API tokens.
- cURL installed on your system.

## Getting started

Follow these steps to make your first API request.

### Step 1: Register an API

Register the Customer Profile API in the APIConnect catalog.

Use the following example details:

| Field | Value |
|---|---|
| API Name | Customer Profile API |
| Version | 1.0 |
| Base Path | /customers |
| Environment | Development |

For detailed instructions, see [Register an API](../user-guides/register-api.md).

### Step 2: Generate an API token

Generate an access token to authenticate your API request.

Use the following example settings:

| Field | Value |
|---|---|
| Token Name | CustomerAppToken |
| Application | Customer Portal |
| Expiration | 30 days |
| Permissions | Read |

For detailed instructions, see [Create an API Token](../user-guides/create-api-token.md).

:::warning
Use a valid access token when sending API requests. Never include actual tokens in shared documentation or source code.
:::

### Step 3: Send your first API request

Open a terminal and execute the following cURL command.

```bash
curl --request GET \
  --url https://api.apiconnect.example.com/v1/customers/1001 \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Accept: application/json"
```

Replace `YOUR_ACCESS_TOKEN` with the token generated in the previous step.

### Step 4: Review the API response

A successful request returns an HTTP 200 response.

Example response:

```json
{
  "customerId": "1001",
  "customerName": "John Smith",
  "email": "john.smith@example.com",
  "status": "Active"
}
```

## Troubleshooting

If your API request fails, refer to the following table.

| Error | Possible cause | Recommended action |
|---|---|---|
| 400 Bad Request | Invalid request parameters | Verify the request details |
| 401 Unauthorized | Invalid or expired token | Generate a new token |
| 403 Forbidden | Insufficient permissions | Check token permissions |
| 404 Not Found | Incorrect API endpoint | Verify the API URL |
| 500 Internal Server Error | Backend processing error | Contact the API administrator |

## What's next?

You have completed the basic APIConnect workflow.

Explore the following guides to learn more:

- [Register an API](../user-guides/register-api.md)
- [Create an API Token](../user-guides/create-api-token.md)
- [Make an API Request](../user-guides/make-api-request.md)
- [APIConnect Architecture](./architecture.md)
