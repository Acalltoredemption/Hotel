const RegisterForm = ({handleSubmit, name, setName, email, setEmail, password, setPassword}) => {
    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group mb-3">
                <label className="form-label mb-3">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="form-label mb-3">Email</label>
                <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3">
                <label className="form-label mb-3">Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button disabled={!name || !email || !password} className="btn btn-primary">Submit</button>
        </form>
    )
};

export default RegisterForm;