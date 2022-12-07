import * as React from 'react'

import PostFromInternal from './PostFormInternal'
import { FormProvider } from '../../providers/useFormProvider'

const CreatePostForm = ({ account }: { account: string }) => {
    return (
        <FormProvider account={account}>
            <PostFromInternal />
        </FormProvider>
    )
}

export default CreatePostForm
