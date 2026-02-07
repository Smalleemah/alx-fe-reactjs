function UserProfile() {
  return (
    <div
      className="
        bg-gray-100
        sm:p-4 md:p-8
        max-w-xs sm:max-w-xs md:max-w-sm
        mx-auto my-10 md:my-20
        rounded-lg shadow-lg
        text-center
      "
    >
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          sm:w-24 sm:h-24
          md:w-36 md:h-36
          rounded-full
          mx-auto
          mb-4
        "
      />

      {/* User Name */}
      <h1
        className="
          sm:text-lg
          md:text-xl
          text-blue-800
          font-semibold
          mb-2
        "
      >
        John Doe
      </h1>

      {/* User Bio */}
      <p
        className="
          sm:text-sm
          md:text-base
          text-gray-600
          leading-relaxed
        "
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
