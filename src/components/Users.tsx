import { UserList } from "@/types/users";


const Users = ({ users }: UserList) => {
	return (
		<div>
			<h3 className="text-2xl text-gray-700">Users list</h3>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Join Date
							</th>

							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user: any) => (
							<tr key={user.id}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{user.name}
								</th>
								<td className="px-6 py-4">
									{user.email}
								</td>
								<td className="px-6 py-4">
									{user.created_at}
								</td>
								<td className="px-6 py-4 text-right">
									<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

		</div>
	);
}


export default Users;