module.exports = {
    postpost: require('./post-post'),
    postPostMobile: require('./post-post-mobile'),    
    putpost: require('./post-put'),
    deletepost: require('./post-delete'),
    getpost: require('./post-get'),
    getposts: require('./posts-get'),
    postpostLike: require('./post-like-post'),
    getpostLike: require('./post-like-get'),
    deletepostLike: require('./post-like-delete'),
    getpostLikes: require('./post-likes-get'),
    postpostShare: require('./post-share-post'),
    getpostShares: require('./post-shares-get'),
    postpostComment: require('./post-comment-post'),
    getpostComment: require('./post-comment-get'),
    deletepostComment: require('./post-comment-delete'),
    putpostComment: require('./post-comment-put'),
    putpostMedia: require('./post-media-put'),
    postpostMedia: require('./post-media-post'),
    deletepostMedia: require('./post-media-delete'),
    getpostMedia: require('./post-media-get'),
    getPostTagSearch: require('./post-tag-search-get')
};