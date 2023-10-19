export default function env_config() {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_API_DEV;
  } else if (process.env.NODE_ENV === "production") {
    return process.env.NEXT_PUBLIC_API;
  }
}
