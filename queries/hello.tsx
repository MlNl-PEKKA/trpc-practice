import { trpc, type ReactQueryOptions, type RouterInputs } from '@/lib/api'

type GetpostsInput = RouterInputs['posts']['get']
type GetpostsOptions = ReactQueryOptions['posts']['get']

export const useGetposts = (
  input: GetpostsInput,
  options?: GetpostsOptions
) => {
  return trpc.posts.get.useQuery(input, options)
}

type PostpostsOptions = ReactQueryOptions['posts']['post']

export const usePostposts = (options?: PostpostsOptions) => {
  const utils = trpc.useUtils()
  return trpc.posts.post.useMutation({
    ...options,
    onMutate: async (...args) => {
      await utils.posts.get.cancel()
      const prev = utils.posts.get.getData()
      utils.posts.get.setData(undefined, (prev) => {
        if (prev) return [...prev, { text: args[0].text }]
      })
      return { prev }
    },
    onError: (...args) => {
      console.log('FAILED')
      utils.posts.get.setData(undefined, args[2]?.prev)
      options?.onError?.(...args)
    },
    onSuccess: (...args) => {
      console.log('SUCCESS')
      options?.onSuccess?.(...args)
    },
    onSettled: (...args) => {
      utils.posts.invalidate()
      options?.onSettled?.(...args)
    },
  })
}
