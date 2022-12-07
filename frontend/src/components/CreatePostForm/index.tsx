import * as React from 'react'

import CreatePostForm from './CreatePostForm'
import EditPostForm from './EditPostForm'
import { FormProvider } from '../../providers/useFormProvider'

const PostForm = ({
    account,
    context,
}: {
    account: string
    context: 'Create' | 'Edit'
}) => {
    return (
        <FormProvider account={account} context={context}>
            {context === 'Create' ? <CreatePostForm /> : <EditPostForm />}
        </FormProvider>
    )
}

export default PostForm
