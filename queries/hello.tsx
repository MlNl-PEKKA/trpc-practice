import { trpc, type ReactQueryOptions, type RouterInputs } from '@/lib/api'

type GetHelloInput = RouterInputs['hello']['get']
type GetHelloOptions = ReactQueryOptions['hello']['get']

export const useGetHello = (
  input: GetHelloInput,
  options?: GetHelloOptions
) => {
  return trpc.hello.get.useQuery(input, options)
}
