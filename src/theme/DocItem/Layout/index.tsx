import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import type {Props} from '@theme/DocItem/Layout';

import { Brand, CaralIcon  } from 'iconcaral2';
import styles from './styles.module.css';

import DocItem from '@theme-original/DocItem';
import { useAuth } from '../../../context/AuthContext';
import { isAllowedAdmin } from '../../../config/access';


/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}: Props): ReactNode {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  const IconHead = metadata.frontMatter?.iconName;
  const branicon = metadata.frontMatter?.useBrand;
  const Pdfdoc = metadata.frontMatter?.pdfDoc;
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!session || !session.user) {
    return (
      <div>
        <h1>Acceso restringido</h1>
        <p>Debes <a href="/login">iniciar sesión</a> para acceder a la documentación.</p>
      </div>
    );
  }

  // Restringir la carpeta admin a una lista de correos permitidos
  const docPath = (metadata?.source?.path ?? metadata?.source?.relativePath ?? metadata?.unversionedId ?? metadata?.permalink ?? '').toLowerCase();
  const isAdminDoc = docPath.includes('/admin/') || docPath.startsWith('admin/') || metadata?.permalink?.toLowerCase().includes('/docs/admin/');

  if (isAdminDoc && !isAllowedAdmin(session.user.email)) {
    return (
      <div>
        <h1>Acceso restringido</h1>
        <p>Esta sección de administración solo está disponible para usuarios autorizados.</p>
      </div>
    );
  }
  
  return (
      <div className="row">
        <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
          <ContentVisibility metadata={metadata} />
          <DocVersionBanner />
          <div className={styles.docItemContainer}>
            <article>
              <DocBreadcrumbs />
              <DocVersionBadge />
              {docTOC.mobile}
              <div className='label_title'>
                {branicon ? (
                  <Brand name={IconHead} size={50}/>  
                ) : (
                  <CaralIcon name={IconHead} size={50}/>
                )}
                <h1 className={clsx('hero__title', styles.docItemTitle)}>
                  {metadata.title}
                </h1>
                {Pdfdoc && (
                    <a target='_blank' href={Pdfdoc} className={styles.btn}>
                      Descargar brochure comercial
                    </a>
                )}

              </div>
              <DocItemContent>{children}</DocItemContent>
              <DocItemFooter />
              
            </article>
            <DocItemPaginator />
          </div>
        </div>
        {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}

        
      </div>
    );
  }


