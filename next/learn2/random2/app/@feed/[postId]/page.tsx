interface Props{
    params: Promise<{postId: string}>;
}

export default async function PostDetails({params}: Props){
    const {postId} = await params;

    return(
        <div>
            <h2>Post ${postId}</h2>
            <p className="text-gray-700">
                This is a detailed view of post <strong>{postId}</strong>. You can fetch
                real content here using `fetch()` or a CMS API.
            </p>
        </div>
    )
}