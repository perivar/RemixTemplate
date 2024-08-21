import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="font-sans p-4">
        <h1 className="text-3xl">Welcome to Remix</h1>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/start/quickstart"
              rel="noreferrer">
              5m Quick Start
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/start/tutorial"
              rel="noreferrer">
              30m Tutorial
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
      <article className="prose prose-slate lg:prose-lg mx-auto">
        <h2>daisyui and tailwind typography</h2>
        <p>
          <button className="btn btn-primary">Button</button>
        </p>
        <p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => {
              if (document) {
                (
                  document.getElementById('my_modal_1') as HTMLFormElement
                ).showModal();
              }
            }}>
            open modal
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </p>
      </article>
    </div>
  );
}
