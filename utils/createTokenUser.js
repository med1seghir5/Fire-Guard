const createTokenUser = (user) => {
    return {
        name: user.name,
        role: user.role,
        userId: user._id,
        verified: user.isVerifiedEmail,
    };
};

module.exports = createTokenUser;
