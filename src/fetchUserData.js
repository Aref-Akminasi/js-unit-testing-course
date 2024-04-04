// userService.js
export async function getUserFullName(userId) {
  if (!userId || !(typeof userId === 'number')) {
    throw new Error('no id passed to getUserFullName');
  }
  try {
    const userData = await userDataService.getUserById(userId);
    if (!userData) {
      throw new Error('User not found');
    }
    return `${userData.firstName} ${userData.lastName}`;
  } catch (error) {
    console.error(error);
    return 'Error fetching user data';
  }
}

// Imaginary userDataService that fetches user data
export const userDataService = {
  async getUserById(id) {
    // Simulates fetching user data from an external service
    // In real implementation, this would make a network request.
  },
};
