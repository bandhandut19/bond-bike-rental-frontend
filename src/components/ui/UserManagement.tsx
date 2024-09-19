import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserDetailsQuery,
} from "@/redux/user/userApi";
import { TUser } from "@/types";
import { toast } from "sonner";
import { Button } from "./button";

const UserManagement = () => {
  const { data } = useGetAllUsersQuery({});
  const usersData = data?.data;
  const { data: userData } = useGetUserDetailsQuery({});
  const payload = { user_email: userData?.email, user_role: userData?.role };
  const [deleteUser] = useDeleteUserMutation();
  const handleDeleteUser = (id: string) => {
    deleteUser({ id, payload })
      .then((response) => {
        toast(response?.data?.message);
      })
      .catch((error) => {
        toast("Error deleting User:", error);
      });
  };

  const handlePromoteUser = (id: string) => {
    console.log(id);
  };
  return (
    <div className="mx-auto lg:w-4/5 mb-5 w-full md:items-center flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
      <Table>
        <TableCaption className="text-white text-left py-2 px-1 md:hidden lg:hidden font-extrabold text-sm border-2">
          <span className="text-[#D7DFA3]">Tips: </span>Scroll Left To View More
          Details
        </TableCaption>
        <TableHeader className="bg-white bg-opacity-50">
          <TableRow>
            <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
              Name
            </TableHead>
            <TableHead className="text-[#1A4862] lg:px-0 px-2 text-opacity-100 font-extrabold lg:text-lg">
              Email
            </TableHead>
            <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
              Phone
            </TableHead>
            <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
              Role
            </TableHead>
            <TableHead className="text-[#1A4862]  text-opacity-100 px-5 font-extrabold lg:text-lg text-center">
              <h1 className="text-center">Manage</h1>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData?.map((user: TUser) => (
            <TableRow
              key={user._id}
              className="hover:bg-[#1A4862] bg-[#D7DFA3] bg-opacity-35 font-bold"
            >
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 items-center justify-center">
                  {/*Promote Users dialog [ only users can be promoted to admin-- admin can't demote them back to user] */}

                  {user?.role === "admin" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => handlePromoteUser(user?._id as string)}
                          className="py-2 px-5 bg-[#428c34] text-white border-2 hover:bg-[#D7DFA3] hover:text-[#1A4862]"
                        >
                          Promote
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-[#428c34] bg-opacity-80">
                        <DialogHeader>
                          <DialogTitle className="text-white">
                            Promote Admin
                          </DialogTitle>
                          <DialogDescription className="text-white">
                            Promote{" "}
                            <span className="font-extrabold text-[#D7DFA3]">
                              {" "}
                              {user?.name}{" "}
                            </span>{" "}
                            to <span className="text-[#D7DFA3]">Admin </span>
                            of Bond Bike Rental
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <h1 className="text-center text-3xl font-bold text-[#D7DFA3]">
                            YOU CAN NOT PROMOTE AN ADMIN
                          </h1>
                        </div>
                        <DialogFooter>
                          <Button
                            disabled
                            type="submit"
                            onClick={() =>
                              handlePromoteUser(user?._id as string)
                            }
                            className="bg-[#D7DFA3] text-[#1A4862] font-bold border-[#1A4862] rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                          >
                            Promote Admin
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="py-2 px-5 bg-[#428c34] text-white border-2 hover:bg-[#D7DFA3] hover:text-[#1A4862]">
                          Promote
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-[#428c34] bg-opacity-80">
                        <DialogHeader>
                          <DialogTitle className="text-white">
                            Promote User
                          </DialogTitle>
                          <DialogDescription className="text-white">
                            Promote{" "}
                            <span className="font-extrabold text-[#D7DFA3]">
                              {" "}
                              {user?.name}{" "}
                            </span>{" "}
                            to <span className="text-[#D7DFA3]">Admin </span>
                            of Bond Bike Rental
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <h1 className="text-center text-3xl font-bold text-[#D7DFA3]">
                            ARE YOU SURE TO PROMOTE ?{" "}
                          </h1>
                        </div>
                        <DialogFooter>
                          <Button
                            type="submit"
                            onClick={() =>
                              handlePromoteUser(user?._id as string)
                            }
                            className="bg-[#D7DFA3] text-[#1A4862] font-bold border-[#1A4862] rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                          >
                            Promote User
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}

                  {/* Delete User dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="py-2 px-5 bg-[#db3c30] text-white border-2 hover:text-[#1A4862]">
                        Delete
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-[#db3c30] bg-opacity-80">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Delete User
                        </DialogTitle>
                        <DialogDescription className="text-white">
                          Delete{" "}
                          <span className="font-extrabold text-[#D7DFA3]">
                            {" "}
                            {user?.name}{" "}
                          </span>{" "}
                          from Bond Bike Rental
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <h1 className="text-center text-3xl font-bold text-[#D7DFA3]">
                          ARE YOU SURE ?{" "}
                        </h1>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={() => handleDeleteUser(user._id as string)}
                          className="bg-[#D7DFA3] text-[#1A4862] font-bold border-[#1A4862] rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                        >
                          Delete User
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
