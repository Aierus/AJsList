import * as React from 'react'

import PostFromInternal from './PostFormInternal'
import { FormProvider } from '../../providers/useFormProvider'

const CreatePostForm = () => {
    return (
        <FormProvider>
            <PostFromInternal />
        </FormProvider>
    )
}

export default CreatePostForm
