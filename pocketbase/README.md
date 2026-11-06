# PocketBase on run.zero

A ready-made image with a persistent volume. The data in `/pb_data` survives restarts and deploys.

- Live demo: https://pocketbase-example-pocketbase-d9db184f.run-zero.de/api/collections/notes/records (one public record, the admin login is not public)
- Guide: https://run-zero.de/en/guides/pocketbase (German: https://run-zero.de/anleitungen/pocketbase)

## Tested

A record was created, then the service was redeployed and scaled to 0 and back to 1. The record was still there. Scaling to 2 is refused. The redeploy returned 503 for a few seconds.

## Deploy it

1. Copy `run-zero.yaml` into the root of your repository.
2. Create an app, push and deploy once. On first start the service log prints a link for your first superuser.

## Good to know

- Volumes need the Developer plan or higher.
- The service name is `pocketbase`, not `pb`: Kubernetes injects `<NAME>_PORT`, and `PB_PORT` crashes PocketBase.
- A service with a volume runs with 0 or 1 replica, has a short gap on deploy, and has no preview or manual publishing. An existing volume cannot be resized yet.
- Backups run daily, the last 14 are kept. SQLite is copied consistently.
