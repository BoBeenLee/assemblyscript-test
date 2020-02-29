import { PageRendererProps } from "gatsby";
import { inject, observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

import Layout from "src/components/common/Layout";
import SEO from "src/components/common/SEO";
import { IStore } from "src/stores/Store";

interface IInject {
  store: IStore;
}

interface IProps extends PageRendererProps, IInject {
  // TODO
}

@inject(
  ({ store }: { store: IStore }): IInject => ({
    store
  })
)
@observer
class IndexPage extends React.Component<IProps> {
  public render() {
    return <Layout>Test</Layout>;
  }
}

export default IndexPage;
