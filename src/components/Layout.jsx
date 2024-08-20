function Layout( ) {
    return (
        <>
        <Navbar />

        <div className="container text-center mt-5">
          <button className="btn btn-success float-end" onClick={toggle}>
            {state.isCollapsed ? "Close" : "+Add"}
          </button>
          <div className="clearfix mb-4"></div>
          <UploadForm
            inputs={state.inputs}
            isVisible={state.isCollapsed}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        </div>
        </>

    )
}

export default Layout;