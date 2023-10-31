import { URL } from 'url'

export default function getParams(request, param) {
    const { searchParams } = new URL(request.url)
    return searchParams.get(param)
}
