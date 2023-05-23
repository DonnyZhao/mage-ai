(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2403],{10831:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r,i=n(77837),o=n(82394),s=n(75582),l=n(38860),u=n.n(l),c=n(82684),a=n(21764),d=n(83455),p=n(60328),h=n(38341),y=n(67971),f=n(87372),m=n(10919),b=n(41788),j=n(55378),g=n(30775),v=n(86673);!function(e){e.SSH="ssh",e.HTTPS="https"}(r||(r={}));var Z=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",labelDescription:"Defaults to Python's os.getcwd() if omitted. Mage will create this local directory if it doesn't already exist.",uuid:"repo_path"}],x=[{autoComplete:"username",label:"Username",uuid:"username"},{autoComplete:"email",label:"Email",uuid:"email"},{autoComplete:"ssh_public_key",label:"SSH public key in base64",labelDescription:'Run "cat ~/.ssh/id_rsa.pub | base64 | tr -d \\\\n && echo" in terminal to get base64 encoded public key and paste the result here. The key will be stored as a Mage secret.',type:"password",uuid:"ssh_public_key"},{autoComplete:"ssh_private_key",label:"SSH private key in base64",labelDescription:'Follow same steps as the public key, but run "cat ~/.ssh/id_rsa | base64 | tr -d \\\\n && echo" instead. The key will be stored as a Mage secret.',type:"password",uuid:"ssh_private_key"}],_=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",label:"Email",required:!0,uuid:"email"},{autoComplete:"access_token",label:"Access token",labelDescription:"Add your Git access token to authenticate with your provided username. The access token will be stored as a Mage secret.",required:!0,type:"password",uuid:"access_token"}],w=[{autoComplete:"branch",label:"Branch name",required:!0,uuid:"branch"}],k=n(19711),O=n(82944),C=n(82531),P=n(49125),S=n(79585),T=n(96510),q=n(28598);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(){var e=C.ZP.syncs.list().data,t=(0,c.useState)(null),n=t[0],i=t[1],l=(0,c.useState)(null),u=l[0],b=l[1],M=(0,c.useState)(null),E=M[0],H=M[1],I=(0,c.useState)(null),N=I[0],G=I[1];(0,c.useEffect)((function(){if(e){var t,n=null===e||void 0===e||null===(t=e.syncs)||void 0===t?void 0:t[0];b(null===n||void 0===n?void 0:n.user_git_settings),i(n),G(!(null===n||void 0===n||!n.branch))}}),[e]);var A=(0,d.Db)(C.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(e){var t=e.sync;t&&(i(t),window.location.reload(),a.Am.success("Sync saved",{position:a.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e){var t=e.error.exception;return H(t)}})}}),R=(0,s.Z)(A,2),F=R[0],U=R[1].isLoading,W=(0,d.Db)(C.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(e){e.sync&&a.Am.success("Success!",{position:a.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e){var t=e.error.exception;return H(t)}})}}),B=(0,s.Z)(W,2),L=B[0],z=B[1].isLoading,X=(0,c.useMemo)((function(){return(null===n||void 0===n?void 0:n.auth_type)||r.SSH}),[null===n||void 0===n?void 0:n.auth_type]),Y=(0,c.useMemo)((function(){return X===r.HTTPS?_:x}),[X]),J=(0,c.useMemo)((function(){return(0,q.jsx)("form",{children:Y.map((function(e){var t=e.autoComplete,n=e.disabled,r=e.label,i=e.labelDescription,s=e.required,l=e.type,c=e.uuid;return(0,q.jsxs)(v.Z,{mt:2,children:[i&&(0,q.jsx)(v.Z,{mb:1,children:(0,q.jsx)(k.ZP,{small:!0,children:i})}),(0,q.jsx)(O.Z,{autoComplete:t,disabled:n,label:r,onChange:function(e){b((function(t){return D(D({},t),{},(0,o.Z)({},c,e.target.value))}))},primary:!0,required:s,setContentOnMount:!0,type:l,value:(null===u||void 0===u?void 0:u[c])||""})]},c)}))})}),[Y,b,u]);return(0,q.jsx)(g.Z,{uuidItemSelected:S.fF,uuidWorkspaceSelected:S.WH,children:(0,q.jsxs)(v.Z,{p:P.cd,style:{width:"600px"},children:[(0,q.jsx)(f.Z,{children:"Git repository settings"}),(0,q.jsx)(v.Z,{mt:1,children:(0,q.jsx)(k.ZP,{bold:!0,children:"Authentication type"})}),(0,q.jsx)(v.Z,{mt:1,children:(0,q.jsx)(j.Z,{compact:!0,label:"Authentication type",onChange:function(e){var t=e.target.value;i((function(e){return D(D({},e),{},{auth_type:t})}))},value:X,children:Object.entries(r).map((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,q.jsx)("option",{value:r,children:n},r)}))})}),(0,q.jsx)(v.Z,{mt:P.Mq,children:X===r.SSH&&(0,q.jsxs)(k.ZP,{bold:!0,children:["You will need to ",(0,q.jsx)(m.Z,{href:"https://docs.mage.ai/developing-in-the-cloud/setting-up-git",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})}),(0,q.jsx)("form",{children:Z.map((function(e){var t=e.autoComplete,r=e.disabled,s=e.label,l=e.labelDescription,u=e.required,c=e.type,a=e.uuid;return(0,q.jsxs)(v.Z,{mt:2,children:[l&&(0,q.jsx)(v.Z,{mb:1,children:(0,q.jsx)(k.ZP,{small:!0,children:l})}),(0,q.jsx)(O.Z,{autoComplete:t,disabled:r,label:s,onChange:function(e){i((function(t){return D(D({},t),{},(0,o.Z)({},a,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:c,value:(null===n||void 0===n?void 0:n[a])||""})]},a)}))}),(0,q.jsx)(v.Z,{mt:P.Mq,children:(0,q.jsxs)(y.Z,{alignItems:"center",children:[(0,q.jsx)(v.Z,{mr:1,children:(0,q.jsx)(h.Z,{checked:!!N,onClick:function(){return G((function(e){var t=!e;return t||i((function(e){return D(D({},e),{},{branch:null,sync_on_pipeline_run:!1})})),t}))}})}),(0,q.jsxs)(k.ZP,{bold:!0,children:["Use ",(0,q.jsx)(m.Z,{bold:!0,href:"https://docs.mage.ai/production/data-sync/git#git-sync",openNewWindow:!0,children:"Git Sync"})," (Click link for more information)"]})]})}),N?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(v.Z,{mt:P.Mq,children:(0,q.jsx)(k.ZP,{bold:!0,children:"Sync with a specified branch when requested or on every trigger run. These settings will be saved at the project level."})}),(0,q.jsx)("form",{children:w.map((function(e){var t=e.autoComplete,r=e.disabled,s=e.label,l=e.required,u=e.type,c=e.uuid;return(0,q.jsx)(v.Z,{mt:2,children:(0,q.jsx)(O.Z,{autoComplete:t,disabled:r,label:s,onChange:function(e){i((function(t){return D(D({},t),{},(0,o.Z)({},c,e.target.value))}))},primary:!0,required:l,setContentOnMount:!0,type:u,value:(null===n||void 0===n?void 0:n[c])||""})},c)}))}),(0,q.jsx)(y.Z,{alignItems:"center",children:(0,q.jsx)(v.Z,{mt:2,children:(0,q.jsx)(h.Z,{checked:null===n||void 0===n?void 0:n.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){i((function(e){return D(D({},e),{},{sync_on_pipeline_run:!(null!==n&&void 0!==n&&n.sync_on_pipeline_run)})}))}})})}),(0,q.jsx)(v.Z,{mt:P.Mq,children:(0,q.jsx)(k.ZP,{bold:!0,children:"Configure the Git authentication credentials that will be used to sync with the specified Git repository."})}),(0,q.jsx)("form",{children:Y.map((function(e){var t=e.autoComplete,r=e.disabled,s=e.label,l=e.labelDescription,u=e.required,c=e.type,a=e.uuid;return(0,q.jsxs)(v.Z,{mt:2,children:[l&&(0,q.jsx)(v.Z,{mb:1,children:(0,q.jsx)(k.ZP,{small:!0,children:l})}),(0,q.jsx)(O.Z,{autoComplete:t,disabled:r,label:s,onChange:function(e){i((function(t){return D(D({},t),{},(0,o.Z)({},a,e.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:c,value:(null===n||void 0===n?void 0:n[a])||""})]},a)}))})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(v.Z,{mt:P.Mq,children:(0,q.jsx)(k.ZP,{bold:!0,children:"These fields are required to help Mage configure your Git settings. These settings will be specific to your user."})}),J]}),(0,q.jsx)(v.Z,{mt:2,children:(0,q.jsx)(p.Z,{loading:U,onClick:function(){return F({sync:D(D({},n),{},{user_git_settings:u})})},primary:!0,children:"Save repository settings"})}),E&&(0,q.jsx)(v.Z,{mt:1,children:(0,q.jsx)(k.ZP,{danger:!0,children:E})}),N&&(0,q.jsxs)(v.Z,{mt:P.HN,children:[(0,q.jsx)(f.Z,{children:"Synchronize code from remote repository"}),(0,q.jsxs)(v.Z,{mt:1,children:[(0,q.jsxs)(k.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,q.jsx)("br",{}),"This may ",(0,q.jsx)(k.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you\u2019ve committed or backed up your current changes."]}),(0,q.jsx)(v.Z,{mt:2}),(0,q.jsxs)(k.ZP,{children:["Reset will tell Mage to try to clone your repository from remote. This will also ",(0,q.jsx)(k.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," all your local changes and reset any settings you may have configured for your local Git repo. This may be helpful if you are having issues syncing your repository."]})]}),(0,q.jsx)(v.Z,{mt:2,children:(0,q.jsxs)(y.Z,{children:[(0,q.jsx)(p.Z,{loading:z,onClick:function(){return L({sync:{action_type:"sync_data"}})},warning:!0,children:"Synchronize code"}),(0,q.jsx)(v.Z,{ml:2}),(0,q.jsx)(p.Z,{danger:!0,loading:z,onClick:function(){return L({sync:{action_type:"reset"}})},children:"Reset repository"})]})})]})]})})}E.getInitialProps=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var H=(0,b.Z)(E)},37056:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/sync-data",function(){return n(10831)}])},80022:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},15544:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},99177:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return i}})},93189:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(12539),i=n(80022);function o(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,1424,1005,3077,9774,2888,179],(function(){return t=37056,e(e.s=t);var t}));var t=e.O();_N_E=t}]);