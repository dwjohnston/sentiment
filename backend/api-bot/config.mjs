import env from "./environment-secret.json";

export default function () {
    var node_env = process.env.NODE_ENV || 'development';
    return env[node_env];
};