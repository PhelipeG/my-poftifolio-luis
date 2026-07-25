import coreWebVitals from "eslint-config-next/core-web-vitals"

const config = [
  ...coreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
]

export default config
