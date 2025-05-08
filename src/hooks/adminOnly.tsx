// import { Spinner, Flex } from '@chakra-ui/react';

// const AdminOnly = ({ user, isLoading, children }) => {
//   if (isLoading) {
//     return (
//       <Flex justifyContent="center" alignItems="center" p={4}>
//         <Spinner color="var(--theme-color)" />
//       </Flex>
//     );
//   }

//   if (user?.isAdmin) {
//     return children;
//   }

//   return null;
// };