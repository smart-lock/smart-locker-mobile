import { MutationFn, MutationResult, MutationProps, Mutation, MutationOptions } from 'react-apollo';
import { Omit } from 'lodash';
import React from 'react';
import { DocumentNode } from 'graphql';

export const buildMutation = <TData, TVariables>(mutation: DocumentNode) => {
  interface MyMutationResults extends MutationResult<TData> {
    safeMutate: MutationFn<TData, TVariables>;
  }
  type RenderFn = (mutateFn: MutationFn<TData, TVariables>, result: MyMutationResults) => React.ReactNode;
  interface TypedMutationProps extends Omit<Partial<MutationProps<TData, TVariables>>, 'children'> {
    children?: RenderFn;
    render?: RenderFn;
    renderLoading?: RenderFn;
    renderError?: RenderFn;
  }
  return class extends React.Component<TypedMutationProps> {
    public render() {
      const { children, render, ...props } = this.props;
      return (
        <Mutation mutation={mutation} {...props}>
          {(mutateFn, renderProps) => {
            const safeMutateFn = (options?: MutationOptions<TData, TVariables>) => mutateFn(options).catch((e) => e);
            const newRenderProps = { ...renderProps, safeMutate: safeMutateFn };
            if (renderProps.loading && this.props.renderLoading) {
              return this.props.renderLoading(mutateFn, newRenderProps);
            } else if (renderProps.error && this.props.renderError) {
              return this.props.renderError(mutateFn, newRenderProps);
            } else {
              if (children) {
                return (children as RenderFn)(mutateFn, newRenderProps);
              } else if (render) {
                return render(mutateFn, newRenderProps);
              }
            }
          }}
        </Mutation>
      );
    }
  };
};